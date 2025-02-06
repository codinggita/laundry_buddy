import React, { useState } from "react";
import {
  Package,
  User,
  Home,
  Shirt,
  Scale,
 
  QrCode,
 
  DollarSign,
  Building,
} from "lucide-react";
import Sidebar from "../Sidebar";

export default function SubmitOrder() {
  const [step, setStep] = useState(1);
  const [showpayment, setShowPayment] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setScreenshot(imageURL);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-6 ml-0 md:ml-96 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Submit Order
        </h2>

        {/* Stepper */}
        <div className="flex justify-between sm:justify-start mt-6 space-x-6 sm:space-x-72">
          <div
            className={`flex flex-col items-center ${
              step === 1 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <Package
              className={`w-10 h-10 p-2 rounded-full ${
                step === 1 ? "bg-blue-600  text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base ">Order Details</p>
          </div>
          <div
            className={`flex flex-col items-center ${
              step === 2 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <Scale
              className={`w-10 h-10  p-2 rounded-full ${
                step === 2 ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base ">Weight & Items</p>
          </div>
          <div
            className={`flex flex-col items-center ${
              step === 3 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <DollarSign
              className={`w-10 h-10  p-2 rounded-full ${
                step === 3 ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base">Review & Pay</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-4xl">
          {step === 1 && (
            <>
              <h3 className="text-lg font-semibold">Order Details</h3>
              <p className="text-sm text-gray-500">
                Fill in your laundry details
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Package className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Bag Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <User className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Building className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Room Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Home className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Building"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Shirt className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="number"
                    placeholder="Number of Items"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Scale className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="number"
                    placeholder="Kg"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              {" "}
              <div className="bg-white rounded-lg border p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-2">
                  Order Confirmation
                </h2>
                <p className="text-gray-600 mb-6">Check you order carefully</p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600">Items</span>
                      </div>
                      <span className="font-medium">14 Pices</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600">Weight(kg)</span>
                      </div>
                      <span className="font-medium">2.5 kg</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>$1.2</span>
                    </div>
                    <div className="flex justify-between text-blue-600 font-medium">
                      <span>Total</span>
                      <span>$1.3</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-gray-600">
                    <p>• Prices include standard cleaning and handling</p>
                    <p>• Additional charges may apply for stain treatment</p>
                    <p>• Minimum order weight: 2 kg</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Step 3: Review & Payment */}
          {step === 3 && (
            <div className="bg-white rounded-lg border p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Review and Payment</h3>
              <p className="text-gray-600 mb-6">
                Review your order and complete payment
              </p>

              {/* Order Details */}
              <div className="grid grid-cols-2 gap-4 text-sm mt-4 bg-blue-50 rounded-lg p-3">
                <div>
                  <p className="text-muted-foreground text-gray-600 ">Name</p>
                  <p className="font-medium">Mayur Waykar</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-gray-600 ">
                    Bag Number
                  </p>
                  <p className="font-medium">230</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-gray-600 ">
                    Room Number
                  </p>
                  <p className="font-medium">52</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-gray-600 ">
                    Building
                  </p>
                  <p className="font-medium">Boys Hostel</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-gray-600 ">
                    Number of Items
                  </p>
                  <p className="font-medium">10 Pieces</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-gray-600 ">
                    Weight (kg)
                  </p>
                  <p className="font-medium">2.5</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="flex justify-center mt-6">
                <button className="border p-4 rounded-lg flex flex-col items-center ">
                  <QrCode
                    className="h-6 w-6"
                    onClick={() => setShowPayment(!showpayment)}
                  />
                  <span className="text-sm font-medium">UPI Payment</span>
                </button>
              </div>

              {/* QR Code Payment */}
              {showpayment && (
                <>
                  <div className="flex flex-col items-center gap-2 py-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAElBMVEX///8AAACIiIji4uI9PT1aWloyeJaOAAAE8klEQVR4nO2dYZujIAyEq+D//8v37AKek07TYNG17cy3IhBevAuYoHu7SZIkSZdWmnuVnjdMYIIWvmqew0y9Ss8bosFaOA81/1cwWTCCEUwXzHQ6zPJcFIbWQYP1EnfNe827ME6VJgqTWB3P4CDzY3sTzDjzY3sTzDjzY3sTzDjzkd7mTDTT3tKPbgtUKYVrjXINu14c8571PTATEYcpCuxVsOvMqkxQhVo/A2bphXHvjGAEQ3vr/j9zZRgTZkhbd9a8d9EbwBhBFfqwIhjBCEYwnwFzyb2Z9wiA7bIzineFceNmghGMYAQzFiZROTA24/ir+sSWS5kZlGPes35GqMmoXHNneIz5E2CyYATzNTDckYBToTAtiEphtpdWGIzgNpjn9jtg4qLrTEMDGLrO0Hb95o+EwUCyYAQjmG+Ewb0Z7rZPgAk4eL6JrcOoZ0HqdjmVX+ZeFM30RMpe82OFc2oeOrCwCLcFxwxqrwQjmBMkmKNhAv6PXuQwJYRB4zHtPHa9Fna/Ha7Zi0vwOi5MRWKFrkHQwjqL3FLBCEYw14HBQTWdAINbeVrH6cWMlBqk8Sc6UDea3p8FEIxgBCOYN4fhrxqWKqawmmI1E3SGMDmRBlPanidsY2Jd70hpPJ/EtrJldg0HhTDeQSBTWJFwTEfCLOyaYAQjmIcw13IAGd4LqeED9urHKhjUAoU1i5mg7xqIWBMF2+jEGnDfBisSdNZgMvQdEV00aRU6w5k1CNxmekdDq/QRMPTlmCr6L1EwgvlyGM8BnAeTFtiatiixI3TNc2nf1s5txcUkaKs75hgQSKZh5WpobIJ2Ahhv2r1ss1Fg2hv2gTB0OyMYwQjmIUzAAeCvQ2EWCBc0w+CFsRD9rnHNyFs8bGsArrmaXT/z8TjHl9ClR3bNOO5auLBCPieP7s5kn2dwTDTBgOoINQ2C8YJighGMYO51DQeQMCBBYeZf92giCiboYQySMxUY0Fjtk5rY9XwLu2Z3DcMvF3hzGpg9N2vrjGlH3EwwghHMN8JgtKKdOi5ZOXwSccMb7BraxTRgYua9QvdDqVyBd5Jwhul3Z+hBoL2L5n4JRjCCEcybwrihJuzcGwaubHvPzkwwT6bdJ8HQbIlgBCOYl2Dc1/F4TYCZt/HkFrJue2jWfIZ2qAVh2j4ZTAxeiwCm9h1Yn2g7lHnkYTd99MLKBiWYOwlmhARz1w71Moznmj1/Xd/Jbn4TP94PwzDtcExwscE0Tw1/TyAA05+gxd7MW4wMxqBBL+7hchzpCTDmeYbBRD5uIBjBCOazYXD4h8IE1hfsLZHD2Sa1iTBYxV1n8ONUrKYP49WhUxO4pQiDejHrIRjBfDIMvXYGjLdRNjA0Kwi5QUwfmh01s9MCGgHHFYHxnku8OUUFAucRCUYwghGMYHbB0IAGrqvYNc+FjkF7FYYO6giYnvyMYAQjmIvC5CvCJLbbNzAYMYefBoY+AhS1IQVymvthWBUv24zyzty8/BUtwQhGMPtg2EczOmDaWynEjd22P///uddt3ITD4GA6YDxFYKp9GBRW4YFz0F/Hzbxjjd3fOBeMYATzOTBY5QyY5bk8mFzrMBizeaa9mAB6+esCONKMp088mLjclAaDoQZpgvbmFB6abaYN6d/SEIxgBPO44R/DOKlJLjenWWHYIW00aHqhY8KGgYCGJEmSdAH9A5P5Yo5FE8xrAAAAAElFTkSuQmCC"
                      alt="QR Code"
                      className="h-40 w-40 border p-2 rounded-lg"
                    />
                    <p className="font-medium">Scan QR Code to Pay</p>
                    <p className="text-sm text-gray-500">
                      Or use UPI ID: laundry@upi
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col items-center">
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="uploadScreenshot"
                    />

                    {/* Upload Button */}
                    <label
                      htmlFor="uploadScreenshot"
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full max-w-xs"
                    >
                      Upload Payment Screenshot
                    </label>

                    {/* Show Uploaded Screenshot */}
                    {screenshot && (
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          Uploaded Screenshot:
                        </p>
                        <img
                          src={screenshot}
                          alt="Payment Screenshot"
                          className="h-32 w-32 sm:h-40 sm:w-40 border p-2 rounded-lg mx-auto"
                        />
                      </div>
                    )}
                  </div>

                  {/* Total Payment */}
                  <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center mt-4">
                    <div>
                      <p className="text-sm text-blue-600">Total to Pay</p>
                      <p className="text-xs text-blue-500">
                        Including all service fees
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">$1.3</p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                className="bg-gray-400 text-white px-6 py-2 rounded-lg"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            {step < 3 && (
              <>
                {" "}
                <div> </div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => setStep(step + 1)}
                >
                  Continue
                </button>
              </>
            )}
            {step === 3 && (
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Submit Order
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
