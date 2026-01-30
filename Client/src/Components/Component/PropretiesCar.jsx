export default function Propreties({car}){
    return (
      <div
        className="w-full max-w-8xl mx-auto p-6 rounded-2xl bg-main 
                grid grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(car.properties).map(([key, value]) => (
          <div
            key={key}
            className="group bg-bg-main border border-blue-500/20 
                 rounded-2xl p-5  shadow-sm
                 hover:shadow-md hover:border-blue-400/40
                 transition-all duration-300"
          >
            <span
              className="block text-xs font-medium uppercase tracking-wider 
                       text-blue-400 mb-2"
            >
              {key}
            </span>

            <span className="block text-lg font-semibold text-text">
              {value}
            </span>
          </div>
        ))}
      </div>
    );
}