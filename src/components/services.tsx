import { Truck, Headphones, ShieldCheck } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ]

  return (
    <div className=' py-[140px]  '>
    <div className="w-full max-w-6xl mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-6 max-w-[262px]">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-gray-600 bg-opacity-30 rounded-full" />
              <div className="absolute inset-[14%] bg-black rounded-full flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-xl font-semibold text-center font-poppins ">{service.title}</h3>
              <p className="text-sm text-center font-poppins ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
