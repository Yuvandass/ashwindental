"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// import Image from 'next/image';
// import { Star } from 'lucide-react'; // Assuming you have lucide-react for the Star icon

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  CheckCircle,
  Heart,
  Shield,
  Award,
  Users,
  Calendar,
  Stethoscope,
  Smile,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Play,
  Camera,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"





const slideshowImages = [
  {
    src: '/clinic_image_1.JPG?height=400&width=500&text=Modern+Office',
    alt: 'Modern dental office reception',
  },
  {
    src: '/clinic_image_2.JPG?height=400&width=500&text=Advanced+Tech',
    alt: 'State-of-the-art dental equipment',
  },
  {
    src: '/clinic_image_3.JPG?height=400&width=500&text=Happy+Patient',
    alt: 'Friendly dentist with a happy patient',
  },
  {
    src: '/clinic_image_4.JPG?height=400&width=500&text=Happy+Patient',
    alt: 'Friendly dentist with a happy patient',
  },
];
export default function DentalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#206365]/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 md:space-x-3 animate-fade-in">
            <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg">
              <Image
                        src="/ashwindentalico.png"
                        alt="icon"
                        width={70}
                        height={70}
                        className="h-10 w-8 md:h-10 md:w-10 text-white" 
                      />
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-bold text-blue-600">Ashwin Dental Care</h1>
              <p className="text-xs text-gray-600 hidden md:block">Your Trusted Dental Care</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden xl:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-medium">+91 96297-97989</span>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-xs md:text-sm px-3 md:px-4 py-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {/* py-20 md:py-32 */}
        <section className="relative py-10 md:py-16 overflow-hidden ">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('/background6.png')] bg-cover bg-center opacity-35"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div className="animate-fade-in-up text-center lg:text-left">
                <Badge
                  variant="secondary"
                  className="mb-4 md:mb-6 bg-blue-600/10 text-blue-600 border-blue-600/20 animate-bounce text-xs md:text-sm"
                >
                  ✨ Now Accepting New Patients
                </Badge>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-blue-600 animate-fade-in-up delay-200 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Your Perfect
                  <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    Smile
                  </span>{" "}
                  Starts Here
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-400">
                  Experience gentle, comprehensive dental care in a comfortable environment. Our experienced team is
                  dedicated to helping you achieve optimal oral health and a confident smile.
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up delay-600 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 border-blue-600 text-blue-600 hover:bg-blue-600/5 transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open("https://www.instagram.com/ashwindental_care", "_blank")}
                  >
                    <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Watch Our Videos
                  </Button>
                </div>
                <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 animate-fade-in-up delay-800">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Same-day appointments
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    EMI accepted
                  </div>
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center lg:justify-start transition-all duration-300 hover:scale-105"
                  >
                    Learn More About Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            {/* start ----------------------------------------------------------- */ }
    <div className="relative animate-fade-in-right">
      {/* 
        The hover effect is moved to this parent div. 
        This way, the entire container (slideshow + card) scales together smoothly.
      */}
      <div className="relative transform hover:scale-105 transition-all duration-500 hidden sm:block">
        {/* 2. Swiper Component replaces the static Image */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="rounded-2xl shadow-2xl"
        >
          {slideshowImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto object-cover" // Ensure image fills the slide
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <Image
                    src="/clinic_image_1.JPG?height=600&width=500"
                    alt="Modern dental office"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 sm:hidden"
                  />

        {/* 3. The Glassmorphism overlay card remains unchanged */}
        {/* It is positioned relative to the parent div, which now contains the Swiper. */}
        <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30 animate-float">
          <div className="flex items-center space-x-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-sm text-blue-600">4.9/5 Rating</p>
              <p className="text-xs text-gray-600">850+ Happy Patients</p>
              
            </div>
          </div>
        {/* </div>
      
      </div> */}
      </div>
                  {/*end--------------------------------------------------- */}
                  {/* Floating elements */}
                  <div className="absolute bottom-1/4 -left-10 w-6 h-6 bg-blue-600/30 rounded-full animate-bounce delay-3000">
                      <Image
                        src="/ashwindentalico.png"
                        alt="icon"
                        width={70}
                        height={70}
                        className="h-10 w-8 md:h-10 md:w-10 text-white" 
                      /></div>
                  <div className="absolute -top-4  -right-0 w-8 h-8 bg-blue-600/20 rounded-full animate-ping delay-3000">
                      <Image
                        src="/ashwindentalico.png"
                        alt="icon"
                        width={70}
                        height={70}
                        className="h-10 w-8 md:h-10 md:w-10 text-white" 
                      /> </div>
              </div>
            
           </div>
      </div>
 {/* Additional hero images */}
          <div className="container mx-auto px-4 md:px-6 mt-16 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-1000">
              <div className="relative group hidden sm:block">
                <div className="rounded-xl">
                <iframe width="315" height="560" src="https://www.youtube.com/embed/oH0HBMuvcok" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                </div>
              <div className="relative group hidden sm:block">
                <div className="rounded-xl">
                <iframe width="315" height="560" src="https://www.youtube.com/embed/knnwy6ww22Y" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                </div>
                <div className="relative group ">
                <div className="rounded-xl">
                <iframe width="315" height="560" src="https://www.youtube.com/embed/Z1EpaH6CaCM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                </div>
                <div className="relative group hidden sm:block">
                <div className="rounded-xl">
                <iframe width="315" height="560" src="https://www.youtube.com/embed/5E1nwWQUGkU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                </div>
              
               
            </div>
          </div>
            </section>

        {/* Services Section */}
        <section id="services" className="py-10 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDYzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 mb-4 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              >
                Comprehensive <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    Dental
                  </span>{" "} Services
              </h2>
              <p className="text-lg text-gray-600">
                From routine cleanings to advanced procedures, we provide complete dental care for the whole family
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Smile,
                  title: "General Dentistry",
                  description: "Routine cleanings, fillings, crowns, and preventive care to maintain your oral health.",
                  features: ["Regular cleanings & examination", "Fillings & restorations", "& much more...."],
                  color: "bg-blue-600/10 text-blue-600",
                },
                {
                  icon: Star,
                  title: "Cosmetic Dentistry",
                  description: "Transform your smile with our advanced cosmetic dental treatments and procedures.",
                  features: ["Teeth whitening", "Porcelain veneers", "Smile makeovers & much more..."],
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Orthodontics",
                  description: "Straighten your teeth with traditional braces or modern clear aligner treatments.",
                  features: ["Traditional braces", "Clear aligners", "Retainers"],
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Heart,
                  title: "Pediatric Dentistry",
                  description: "Gentle, specialized dental care designed specifically for children and teenagers.",
                  features: ["Child-friendly environment", "Preventive treatments", "Complete Paediatric care"],
                  color: "bg-red-100 text-red-600",
                },
                {
                  icon: Stethoscope,
                  title: "Oral Surgery",
                  description: "Advanced surgical procedures including extractions and dental implant placement.",
                  features: ["Tooth extractions", "Dental implants", "Wisdom teeth removal"],
                  color: "bg-orange-100 text-orange-600",
                },
                {
                  icon: Award,
                  title: "Endodontics Care",
                  description: "Specialized dental care focused on root canals and tooth pulp.",
                  features: ["Same-day appointments", "Pain management", "Root Canal Treatment"],
                  color: "bg-teal-100 text-teal-600",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` } }
                >
                  <CardHeader>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-4 group-hover:scale-110 transition-all duration-300`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gradient-to-br from-blue-200 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-blue-600 mr-3" />
                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Work Gallery
                </h2>
              </div>
              <p className="text-lg text-gray-600">See the amazing transformations we've achieved for our patients</p>
            </div>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smile Makeover",
                  description: "Complete smile transformation with complete denturess",
                  category: "Cosmetic",
                  beforeImage: "/gallery/client_1_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_1_after.jpg?height=300&width=400",
                },
                {
                  title: "Smile Designing",
                  description: "Professional smile designing treatment",
                  category: "Cosmetic",
                  beforeImage: "/gallery/client_2_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_2_after.jpg?height=300&width=400",
                },
                {
                  title: "Dental Implants",
                  description: "Missing teeth replacement with natural-looking results",
                  category: "Restorative",
                  beforeImage: "/gallery/client_3_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_3_after.jpg?height=300&width=400",
                },
                {
                  title: "Orthodontic Treatment",
                  description: "Straightening treatment with Invaslign",
                  category: "Orthodontics",
                  beforeImage: "/gallery/client_4_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_4_after.jpg?height=300&width=400",
                },
                {
                  title: "Crown Restoration",
                  description: "Damaged tooth restored with zirconia crown",
                  category: "Restorative",
                  beforeImage: "/gallery/client_5_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_5_after.jpg?height=300&width=400",
                },
                {
                  title: "Full mouth rehablitation",
                  description: "Complete mouth rehablitation treatment",
                  category: "Cosmetic",
                  beforeImage: "/gallery/client_6_before.jpg?height=300&width=400",
                  afterImage: "/gallery/client_6_after.jpg?height=300&width=400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-white/80 backdrop-blur-md border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="relative">
                        <Image
                          src={item.beforeImage || "/placeholder.svg"}
                          alt={`${item.title} - Before`}
                          width={300}
                          height={150}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={item.afterImage || "/placeholder.svg"}
                          alt={`${item.title} - After`}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-blue-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-600/10 text-blue-600 text-xs">
                        {item.category}
                      </Badge>
                      <Sparkles className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-blue-200 to-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-14 md:px-16 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="animate-fade-in-left">
                <h2
               className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 mb-6 cursor-pointer hover:scale-105 transition-all duration-300"
               onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                >
              Meet Dr. <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    Ashwin
                  </span>{" "} Dhakshin{" "}<br></br>
              <span className="text-[0.70em]">BDS.,{" "}FCE(Malaysia).,{" "}AFLD</span>
              </h2>

                <p className="text-lg text-gray-600 mb-6">
                  With over 6 years of experience in dentistry, Dr. Ashwin is committed to providing exceptional
                  dental care in a comfortable, welcoming environment. He graduated from Ramakrishna Dental College and Hospital continues to stay current with the latest advances in dental technology and techniques.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">6+ Years</p>
                      <p className="text-sm text-gray-600">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">850+</p>
                      <p className="text-sm text-gray-600">Happy Patients</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Rool Canal Specialist",
                    "Certified Invisalign Provider",
                    "Laser Dentistry",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative ml-[80px] animate-fade-in-right">
                <div className="relative">
                  <Image
                    src="/DRASHWIN.jpg?height=500&width=400"
                    alt="Dr. Ashwin Dhakshin"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                  />
                  {/* Glassmorphism card overlay */}
                  <div className="absolute mx-auto -bottom-6 -right-6 bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/30 animate-float">
                    <div className="text-center">
                      <p className="font-bold text-2xl text-blue-600">4.9★</p>
                      <p className="text-xs text-gray-600">Patient Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-20 bg-gradient-to-br from-white to-blue-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600">
                Honored for excellence in dental care and patient satisfaction
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4 animate-fade-in-left">
                <h3 className="text-2xl font-semibold text-blue-600">Recognized Excellence</h3>
                <p className="text-gray-600">
                 Silver Invisalign GO Award 2024 Highlights:
                </p>
                <ul className="space-y-3">
                  {[
                    "Awarded for Excellence in Clear Aligner Treatment using the Invisalign GO system",
                    "Reflects our expertise in treating mild to moderate orthodontic cases efficiently and effectively.",
                    "Trusted by Invisalign for delivering high-quality orthodontic care in 2024.",
                    "Advanced Technology Implementation Recognition"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in-right">
               <Image
                src="/awards/award1-optimized.jpg"
                alt="Award Recognition"
                 width={350}
                height={150}
                className="rounded-lg w-[200px] h-auto centered mx-auto mb-4 transform hover:scale-105 transition-all duration-300"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Silver Invisalign Provider 2024</h3>
                  <p className="text-gray-600">
                    Awarded Silver Provider Status for Invisalign GO 2024! A proud milestone on our journey to creating perfect smiles with precision and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-600/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                What Our Patients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied patients
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Niveditha Rajyappan (Actor)",
                  role: "Patient since 2023",
                  image: "/reviews/nivedita.jpg?height=60&width=60",
                  rating: 5,
                  text: "Dr. Ashwin and his team made my dental anxiety disappear. The office is so comfortable and modern. I actually look forward to my appointments now!",
                  bgColor: "bg-blue-50/80",
                },
                {
                  name: "Naresh Desanthiri",
                  role: "Patient since 2022",
                  image: "/reviews/naresh.jpg?height=60&width=60",
                  rating: 5,
                  text: "The best dental experience I've ever had! The staff is incredibly friendly and professional. My smile makeover exceeded all my expectations.",
                  bgColor: "bg-green-50/80",
                },
                {
                  name: "Tanish Balakrishnan",
                  role: "Patient since 2024",
                  image: "/reviews/tanish.jpg?height=60&width=60",
                  rating: 5,
                  text: "My kids love coming here! Dr. Ashwin is amazing with children, and the office has such a welcoming atmosphere. Highly recommend to all families.",
                  bgColor: "bg-purple-50/80",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`${testimonial.bgColor} backdrop-blur-md border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 text-gray-700">"{testimonial.text}"</blockquote>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4 border-2 border-blue-600/20"
                      />
                      <div>
                        <div className="font-semibold text-blue-600">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden"
        >
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div> */}

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Schedule Your Visit?</h2>
                <p className="text-lg text-white-00/20 mb-8">
                  Contact us today to book your appointment or learn more about our services. We're here to help you
                  achieve your best smile!
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", content: "+91 96297-97989" },
                    { icon: Mail, title: "Email", content: "ashwindental@gmail.com" },
                    { icon: MapPin, title: "Address", content: " Ashwin dental care,\n 4th floor, mayflower valencia,\n Avinashi Rd, Coimbatore,\n Tamil Nadu 641006" },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      content: "Mon - Thu: 8:00 AM - 6:00 PM\nFri: 8:00 AM - 4:00 PM\nSat: 9:00 AM - 2:00 PM",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-grey-600/20 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in-right">
                <h3 className="text-2xl font-bold mb-6">Schedule Your Appointment</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 text-sm md:text-base"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 text-sm md:text-base"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 text-sm md:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 text-sm md:text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white text-sm md:text-base"
                    >
                      <option value="" className="text-gray-900">
                        Select a service
                      </option>
                      <option value="cleaning" className="text-gray-900">
                        General Cleaning
                      </option>
                      <option value="cosmetic" className="text-gray-900">
                        Cosmetic Consultation
                      </option>
                      <option value="endodontics" className="text-gray-900">
                        Endodontics Care/Root Canal 
                      </option>
                      <option value="orthodontic" className="text-gray-900">
                        Orthodontic Consultation
                      </option>
                      <option value="other" className="text-gray-900">
                        Others
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 text-sm md:text-base"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Schedule Appointment
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500">
                  <Image
                        src="/ashwindentalico.png"
                        alt="icon"
                        width={70}
                        height={70}
                        className="h-8 w-8 md:h-7 md:w-7 text-white" 
                      />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Ashwin Dental Care</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional dental care with a gentle touch. Your smile is our priority.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <Link
                    key={index}
                    href="https://www.instagram.com/ashwindental_care/"
                    className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Services",
                links: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Endodontics Care"],
              },
              {
                title: "Location",
                links: ["Located in : Ashwin Dental Care, ", "4th floor, mayflower valencia, ", "Avinashi Rd, Coimbatore,","Tamil Nadu.641006."],
              },
              {
                title: "Contact Info",
                links: ["Phone : +91 96297 97989", "Email : ashwindental@gmail.com"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <p className="hover:text-blue-600 transition-colors duration-300">
                        {link}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ashwin Dental Care. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-600 text-sm transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
