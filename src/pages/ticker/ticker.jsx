import './ticker.css'


function Ticker(){
    return(
        <>
        <div className="word flex ticker-container items-center h-24 w-[300px] mt-[100px] md:w-[1300px] ">
            <div className="ticker flex text-5xl items-center lg:text-7xl  ">
                <div className="sql px-5 flex ">
                    MYSQL
                </div>
                <div className="Eexpress flex ">
                    EXPRESS JS
                </div>
                <div className="react px-5 flex">
                    REACT JS
                </div>
                <div className="node flex">
                    NODE JS
                </div>
            </div>
           
        </div>
        
        </>
    )
}

export default Ticker