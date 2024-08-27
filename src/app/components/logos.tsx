export function TenjinLogo(props) { 
    return(
        <div className={`relative font-tenjin text-5xl text-center bg-clip-text text-transparent`}>
            <h2 className="block bg-gradient-to-br from-cyan-300  to-pink-300 z-10 from-50% bg-clip-text text-transparent">
                天神
                <br />
                <span>ダッシュ</span>
            </h2>
            <h2 className="absolute origin-center left-1 top-1 bg-gradient-to-br from-cyan-500  to-pink-600 from-50% bg-clip-text text-transparent -z-10 right-[-7px] content-center">
                天神
                <br />
                <span>ダッシュ</span>
            </h2>
            <h2 className="absolute top-[12px] left-[4px] w-full h-full -inset-1 bg-gradient-to-br from-cyan-500  to-pink-600 from-60% bg-clip-text text-transparent opacity-[.70] blur -z-20">
                天神
                <br />
                <span>ダッシュ</span>
            </h2>
        </div>
    )
}