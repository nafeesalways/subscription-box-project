import React from 'react';

const Reviews = () => {
    return (
        <div>
             <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

          {/* Review 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic mb-4">"Absolutely love the variety in every box! It's like a little gift to myself every month."</p>
            <h4 className="font-semibold text-lg">— Sarah M.</h4>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic mb-4">"The tech tools offered saved me so much time and money. Great value for developers."</p>
            <h4 className="font-semibold text-lg">— James K.</h4>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic mb-4">"Customer support is top-notch and the product selection is always relevant."</p>
            <h4 className="font-semibold text-lg">— Anita R.</h4>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Reviews;