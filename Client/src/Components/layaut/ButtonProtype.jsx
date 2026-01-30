

export default function ButtonProtype({message}){
    return(
        <>
         <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-100 active:scale-95">
                {message}
         </button>
         </>
    );
}