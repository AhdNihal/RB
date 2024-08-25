function Products() {
  return (
    <div className="bg-black text-white py-10 px-4 lg:px-0 lg:py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Our Product Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#FED700] text-black p-6 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">SUV Radiators</h2>
            <p>High-performance radiators designed for SUVs.</p>
          </div>
          <div className="bg-[#FED700] text-black p-6 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">Pickup Truck Radiators</h2>
            <p>Durable radiators for tough pickup trucks.</p>
          </div>
          <div className="bg-[#FED700] text-black p-6 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-2">Sedan Radiators</h2>
            <p>Efficient radiators for everyday sedans.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
