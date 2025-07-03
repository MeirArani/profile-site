import { match } from '@formatjs/intl-localematcher';
import accepts from 'accepts';
import { parse } from 'next/dist/build/swc/generated-native';
import { INTERNALS } from 'next/dist/server/web/spec-extension/request';
import { NextRequest, NextResponse } from 'next/server';

let locales = ['ja', 'en'];
let defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const publicContent = [
    '/fontData',
    '/gameData',
    '/musicData', 
    '/photoData',
    '/utilData',
    // Your other files in `public`
  ];

  const isPublic = publicContent.some(content => pathname.includes(content));

  //console.log(pathname);
  console.log(pathname);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (isPublic && pathnameHasLocale) {
    const locale = getLocale(request.headers);
    request.nextUrl.pathname = request.nextUrl.pathname.replace(
      `/${locale}/`,
      ''
    );
    return NextResponse.redirect(request.nextUrl);
  }

  if (isPublic) return;

  if (pathnameHasLocale) return;

  const locale = getLocale(request.headers);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

function getLocale(headers: Headers) {
  const index = { headers };
  let languages = preferredLanguages(headers.get('accept-language'));

  return match(languages, locales, defaultLocale);
}

// From the Negotiator library
// Since the indexing isn't working

function preferredLanguages(accept, provided?) {
  // RFC 2616 sec 14.4: no header = *
  var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');

  if (!provided) {
    // sorted list of all languages
    return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getLanguagePriority(type, accepts, index);
  });

  function getLanguagePriority(language, accepted, index) {
    var priority = { o: -1, q: 0, s: 0 };

    for (var i = 0; i < accepted.length; i++) {
      var spec = specify(language, accepted[i], index);

      if (
        spec &&
        (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0
      ) {
        priority = spec;
      }
    }

    return priority;
  }

  function specify(language, spec, index) {
    var p = parseLanguage(language);
    if (!p) return null;
    var s = 0;
    if (spec.full.toLowerCase() === p.full.toLowerCase()) {
      s |= 4;
    } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
      s |= 2;
    } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
      s |= 1;
    } else if (spec.full !== '*') {
      return null;
    }

    return {
      i: index,
      o: spec.i,
      q: spec.q,
      s: s,
    };
  }

  // sorted list of accepted languages
  return priorities
    .filter(isQuality)
    .sort(compareSpecs)
    .map(function getLanguage(priority) {
      return provided[priorities.indexOf(priority)];
    });
}

function getFullLanguage(spec) {
  return spec.full;
}
function isQuality(spec) {
  return spec.q > 0;
}
function compareSpecs(a, b) {
  return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}

function parseAcceptLanguage(accept) {
  var accepts = accept.split(',');

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var language = parseLanguage(accepts[i].trim(), i);

    if (language) {
      accepts[j++] = language;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;

function parseLanguage(str, i?) {
  var match = simpleLanguageRegExp.exec(str);
  if (!match) return null;

  var prefix = match[1];
  var suffix = match[2];
  var full = prefix;

  if (suffix) full += '-' + suffix;

  var q = 1;
  if (match[3]) {
    var params = match[3].split(';');
    for (var j = 0; j < params.length; j++) {
      var p = params[j].split('=');
      if (p[0] === 'q') q = parseFloat(p[1]);
    }
  }

  return {
    prefix: prefix,
    suffix: suffix,
    q: q,
    i: i,
    full: full,
  };
}
