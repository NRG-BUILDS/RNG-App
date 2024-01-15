const BottomNav = () => {
    const handleNavigation = (num) => {
        const element = document.getElementById('main')
        //element.scrollTop += num
        element.scrollTo({top: element.scrollTop + num, behavior: "smooth"})
    }

    return ( 
        <nav className="fixed bottom-0 w-full p-4 flex items-center justify-between">
            <div className="flex gap-2">
                <button 
                    onClick={() => {handleNavigation(-600)}}
                    className="rounded bg-blue-600 p-2 text-white">up</button>
                <button 
                    onClick={() => {handleNavigation(600)}}
                    className="rounded bg-blue-600 p-2 text-white">dw</button>
            </div>
            <div>
                <div className="p-2 rounded bg-blue-600 text-white">
                    Powered by NRG
                </div>
            </div>
        </nav>
     );
}
 
export default BottomNav;