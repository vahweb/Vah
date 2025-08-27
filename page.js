// app/payment/page.js (Next.js App Router)

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          UPI Payment
        </h1>
        <p className="text-gray-600 mb-6">
          Pay securely using UPI. You can scan the QR code or use the UPI ID below.
        </p>

        {/* QR Code Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-lg p-4">
            {/* Replace with real QR code image */}
            <img 
              src="/upi-qr.png" 
              alt="UPI QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* UPI ID */}
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-700">UPI ID</p>
          <p className="font-semibold text-lg text-gray-900">nidakhan@upi</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href="upi://pay?pa=nidakhan@upi&pn=Ecommerit&am=100&cu=INR"
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Pay ₹100 with UPI App
          </a>

          <button className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 rounded-lg transition">
            Copy UPI ID
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          Payments are 100% secure via UPI.  
          For support, contact <span className="text-blue-600">support@ecommerit.com</span>
        </p>
      </div>
    </div>
  );
}
