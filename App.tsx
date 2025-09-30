import image_e61520f541aa90ce8df0ac412e9b6e78da0240f4 from "figma:asset/e61520f541aa90ce8df0ac412e9b6e78da0240f4.png";
import image_6fc3de17acfa4c65952b64d77058dc6d7ecc1d96 from "figma:asset/6fc3de17acfa4c65952b64d77058dc6d7ecc1d96.png";
import image_92bfc8ee7053481f5eca46085808dfbb0076cadf from "figma:asset/92bfc8ee7053481f5eca46085808dfbb0076cadf.png";
import image_57d11aac2ec5435054b8fd17f3ccb1f6c1fbbab2 from "figma:asset/57d11aac2ec5435054b8fd17f3ccb1f6c1fbbab2.png";
import image_55cbcdc465354cb00de0e076af7efb40c9b952f1 from "figma:asset/55cbcdc465354cb00de0e076af7efb40c9b952f1.png";
import image_a5b9e15cae9bde87323869ad3f23cf1bbb4e3987 from "figma:asset/a5b9e15cae9bde87323869ad3f23cf1bbb4e3987.png";
import { useState, useEffect } from "react";
import StitchDesign from "./imports/StitchDesign";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");



  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121714]">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121714]/95 backdrop-blur-sm border-b border-[#e5e8eb]/10">
        <div className="flex items-center justify-between px-10 py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 relative">
              <div className="absolute inset-[6.62%]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1583 6.20873C12.4527 6.14543 12.5621 6.1863 12.586 6.1978C12.5959 6.21833 12.6182 6.28567 12.6027 6.44453C12.5803 6.67517 12.4834 7.00153 12.2857 7.41003C11.8933 8.22103 11.1695 9.22103 10.1953 10.1953C9.22103 11.1695 8.22107 11.8933 7.41003 12.2857C7.00153 12.4834 6.67517 12.5802 6.44453 12.6027C6.2857 12.6182 6.21837 12.5958 6.1978 12.586C6.1863 12.5621 6.14543 12.4527 6.20873 12.1583C6.2854 11.8018 6.48963 11.3219 6.8346 10.7606C7.2525 10.0806 7.8499 9.3248 8.58737 8.58733C9.3248 7.8499 10.0806 7.25247 10.7606 6.83457C11.3219 6.48963 11.8018 6.2854 12.1583 6.20873V6.20873ZM0.47063 8.74677L5.25323 13.5294C5.6271 13.9032 6.13423 13.9726 6.5739 13.9298C7.0195 13.8863 7.50493 13.721 7.99077 13.486C8.9684 13.0129 10.0873 12.1889 11.1381 11.1381C12.1889 10.0873 13.0129 8.9684 13.486 7.99077C13.721 7.50493 13.8863 7.0195 13.9298 6.5739C13.9726 6.13423 13.9032 5.6271 13.5294 5.25323L8.74677 0.470623C8.28423 0.00809339 7.6255 0.00857661 7.09537 0.122587C6.53603 0.242877 5.91113 0.528063 5.27987 0.916003C4.49927 1.39572 3.6627 2.06118 2.86193 2.86193C2.06118 3.66267 1.39572 4.49927 0.916007 5.27987C0.52807 5.91113 0.242883 6.53603 0.122593 7.09537C0.00857995 7.6255 0.00809672 8.28423 0.47063 8.74677V8.74677Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-white text-lg font-bold">
              Legal Chicks
            </h1>
          </div>

          {/* Order Now Button */}
          <a
            href="http://legalchicks.onlinewebshop.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#38e07a] text-black px-4 py-2 rounded-[20px] font-bold hover:bg-[#38e07a]/90 transition-colors"
          >
            <div className="w-5 h-5 relative">
              <div className="absolute inset-[6.62%]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1583 6.20873C12.4527 6.14543 12.5621 6.1863 12.586 6.1978C12.5959 6.21833 12.6182 6.28567 12.6027 6.44453C12.5803 6.67517 12.4834 7.00153 12.2857 7.41003C11.8933 8.22103 11.1695 9.22103 10.1953 10.1953C9.22103 11.1695 8.22107 11.8933 7.41003 12.2857C7.00153 12.4834 6.67517 12.5802 6.44453 12.6027C6.2857 12.6182 6.21837 12.5958 6.1978 12.586C6.1863 12.5621 6.14543 12.4527 6.20873 12.1583C6.2854 11.8018 6.48963 11.3219 6.8346 10.7606C7.2525 10.0806 7.8499 9.3248 8.58737 8.58733C9.3248 7.8499 10.0806 7.25247 10.7606 6.83457C11.3219 6.48963 11.8018 6.2854 12.1583 6.20873V6.20873ZM0.47063 8.74677L5.25323 13.5294C5.6271 13.9032 6.13423 13.9726 6.5739 13.9298C7.0195 13.8863 7.50493 13.721 7.99077 13.486C8.9684 13.0129 10.0873 12.1889 11.1381 11.1381C12.1889 10.0873 13.0129 8.9684 13.486 7.99077C13.721 7.50493 13.8863 7.0195 13.9298 6.5739C13.9726 6.13423 13.9032 5.6271 13.5294 5.25323L8.74677 0.470623C8.28423 0.00809339 7.6255 0.00857661 7.09537 0.122587C6.53603 0.242877 5.91113 0.528063 5.27987 0.916003C4.49927 1.39572 3.6627 2.06118 2.86193 2.86193C2.06118 3.66267 1.39572 4.49927 0.916007 5.27987C0.52807 5.91113 0.242883 6.53603 0.122593 7.09537C0.00857995 7.6255 0.00809672 8.28423 0.47063 8.74677V8.74677Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            Order Now
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <div className="flex items-center gap-9">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors ${currentSection === "home" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium transition-colors ${currentSection === "about" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={`text-sm font-medium transition-colors ${currentSection === "products" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium transition-colors ${currentSection === "contact" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#121714] bg-cover bg-center h-[300px] rounded-xl mb-8 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=400&fit=crop"
                alt="Legal Chicks Poultry Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Legal Chicks Poultry Farm, nestled in the heart
                of Solana and Gattaran, Cagayan, Philippines, is
                dedicated to raising premium poultry with a
                focus on quality, sustainability, and trust.
                Our farm specializes in two exceptional breeds:
                Rhode Island Reds and Black Australorps, known
                for their robust health, excellent egg-laying
                capabilities, and flavorful meat.
              </p>
              <button
                onClick={() => scrollToSection("products")}
                className="bg-[#38e07a] text-black px-8 py-3 rounded-[20px] font-bold hover:bg-[#38e07a]/90 transition-colors"
              >
                View Our Products
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                About Legal Chicks
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                We are committed to providing our chickens with
                a healthy and natural environment, ensuring they
                thrive in spacious, well-maintained coops with
                access to fresh air and natural light.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#29382e]/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To provide premium quality poultry products
                  while maintaining the highest standards of
                  animal welfare and environmental
                  sustainability.
                </p>
              </div>
              <div className="bg-[#29382e]/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Values
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Quality, sustainability, trust, and
                  responsible farming practices that prioritize
                  animal welfare and minimize environmental
                  impact.
                </p>
              </div>
            </div>

            <div className="bg-[#29382e]/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Our Approach
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Our chickens are fed a balanced diet of
                high-quality feed, supplemented with natural
                greens and grains, promoting their overall
                well-being and the superior quality of our
                products. We believe in responsible farming
                practices that prioritize animal welfare and
                environmental sustainability.
              </p>
              <p className="text-white/80 leading-relaxed">
                We strive to minimize our environmental impact
                through efficient resource management and waste
                reduction strategies. Our commitment to quality
                extends beyond our farming practices as we
                carefully select and breed our chickens to
                maintain the highest standards of health and
                productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="py-20 px-4 bg-[#29382e]/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-[24px] mt-[0px] mr-[27px] ml-[27px]">
                Rhode Island Red Products by Age
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Premium Rhode Island Red chickens at every stage
                of development, raised with care in Solana,
                Cagayan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_a5b9e15cae9bde87323869ad3f23cf1bbb4e3987
                    }
                    alt="Day-Old Chicks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Day-Old Chicks
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Start your flock with our healthy, vaccinated
                  day-old Rhode Island Red chicks. Perfect for
                  raising your own backyard chickens with
                  maximum bonding potential.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱150 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Minimum 10 pcs
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 0-1 week
                </div>
              </div>

              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_55cbcdc465354cb00de0e076af7efb40c9b952f1
                    }
                    alt="Young Pullets"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  1-Month Old Chicks
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Well-established young chickens past the
                  critical brooding stage. These sturdy chicks
                  have developed their first feathers and are
                  easier to manage.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱380 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Hardy & growing
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 1 month
                </div>
              </div>

              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_57d11aac2ec5435054b8fd17f3ccb1f6c1fbbab2
                    }
                    alt="Point of Lay Hens"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  2-Month Young Pullets
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Rapidly growing pullets with developing adult
                  features. These birds are in their juvenile
                  stage, showing excellent growth and strong
                  constitutions.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱580 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Fast growing
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 2 months
                </div>
              </div>

              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_92bfc8ee7053481f5eca46085808dfbb0076cadf
                    }
                    alt="Laying Hens"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Point of Lay Pullets
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Nearly mature pullets about to start laying
                  eggs within 2-4 weeks. These birds represent
                  excellent value with immediate egg production
                  potential.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱820 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Ready to lay
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 4-5 months
                </div>
              </div>

              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_6fc3de17acfa4c65952b64d77058dc6d7ecc1d96
                    }
                    alt="Breeding Roosters"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Prime Laying Hens
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Peak production hens laying 5-6 large brown
                  eggs per week. These proven layers provide
                  immediate return on investment with consistent
                  daily egg production.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱1,200 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Peak production
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 6-12 months
                </div>
              </div>

              <div className="bg-[#29382e]/30 p-6 rounded-xl">
                <div className="h-48 bg-[#121714] rounded-lg mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={
                      image_e61520f541aa90ce8df0ac412e9b6e78da0240f4
                    }
                    alt="Fresh Eggs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Breeding Roosters
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Premium quality mature Rhode Island Red
                  roosters with excellent genetics. Perfect for
                  breeding programs, flock protection, and
                  maintaining strong bloodlines.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[#38e07a] font-bold text-lg">
                    ₱1,500 each
                  </div>
                  <div className="text-white/60 text-sm">
                    Breeding quality
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  Age: 8+ months
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="flex justify-center py-12">
          <a
            href="http://legalchicks.onlinewebshop.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#38e07a] text-black px-8 py-4 rounded-[20px] font-bold hover:bg-[#38e07a]/90 transition-colors"
          >
            <div className="w-5 h-5 relative">
              <div className="absolute inset-[6.62%]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1583 6.20873C12.4527 6.14543 12.5621 6.1863 12.586 6.1978C12.5959 6.21833 12.6182 6.28567 12.6027 6.44453C12.5803 6.67517 12.4834 7.00153 12.2857 7.41003C11.8933 8.22103 11.1695 9.22103 10.1953 10.1953C9.22103 11.1695 8.22107 11.8933 7.41003 12.2857C7.00153 12.4834 6.67517 12.5802 6.44453 12.6027C6.2857 12.6182 6.21837 12.5958 6.1978 12.586C6.1863 12.5621 6.14543 12.4527 6.20873 12.1583C6.2854 11.8018 6.48963 11.3219 6.8346 10.7606C7.2525 10.0806 7.8499 9.3248 8.58737 8.58733C9.3248 7.8499 10.0806 7.25247 10.7606 6.83457C11.3219 6.48963 11.8018 6.2854 12.1583 6.20873V6.20873ZM0.47063 8.74677L5.25323 13.5294C5.6271 13.9032 6.13423 13.9726 6.5739 13.9298C7.0195 13.8863 7.50493 13.721 7.99077 13.486C8.9684 13.0129 10.0873 12.1889 11.1381 11.1381C12.1889 10.0873 13.0129 8.9684 13.486 7.99077C13.721 7.50493 13.8863 7.0195 13.9298 6.5739C13.9726 6.13423 13.9032 5.6271 13.5294 5.25323L8.74677 0.470623C8.28423 0.00809339 7.6255 0.00857661 7.09537 0.122587C6.53603 0.242877 5.91113 0.528063 5.27987 0.916003C4.49927 1.39572 3.6627 2.06118 2.86193 2.86193C2.06118 3.66267 1.39572 4.49927 0.916007 5.27987C0.52807 5.91113 0.242883 6.53603 0.122593 7.09537C0.00857995 7.6255 0.00809672 8.28423 0.47063 8.74677V8.74677Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            Order Now
          </a>
        </div>
        <section id="contact" className="px-4 py-[100px] px-[14px] py-[124px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Us
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Get in touch to learn more about our products or
                visit our farm in Cagayan, Philippines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#29382e]/20 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-6">
                  Visit Our Farm
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[#38e07a] font-medium mb-1">
                      Location
                    </div>
                    <div className="text-white/80">
                      Solana and Gattaran, Cagayan, Philippines
                    </div>
                  </div>
                  <div>
                    <div className="text-[#38e07a] font-medium mb-1">
                      Farm Hours
                    </div>
                    <div className="text-white/80">
                      Monday - Saturday: 6:00 AM - 6:00 PM
                    </div>
                  </div>
                  <div>
                    <div className="text-[#38e07a] font-medium mb-1">
                      Phone
                    </div>
                    <div className="text-white/80">
                      +639369671213
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#29382e]/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <div className="w-4 h-4 relative">
                <div className="absolute inset-[6.62%]">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1583 6.20873C12.4527 6.14543 12.5621 6.1863 12.586 6.1978C12.5959 6.21833 12.6182 6.28567 12.6027 6.44453C12.5803 6.67517 12.4834 7.00153 12.2857 7.41003C11.8933 8.22103 11.1695 9.22103 10.1953 10.1953C9.22103 11.1695 8.22107 11.8933 7.41003 12.2857C7.00153 12.4834 6.67517 12.5802 6.44453 12.6027C6.2857 12.6182 6.21837 12.5958 6.1978 12.586C6.1863 12.5621 6.14543 12.4527 6.20873 12.1583C6.2854 11.8018 6.48963 11.3219 6.8346 10.7606C7.2525 10.0806 7.8499 9.3248 8.58737 8.58733C9.3248 7.8499 10.0806 7.25247 10.7606 6.83457C11.3219 6.48963 11.8018 6.2854 12.1583 6.20873V6.20873ZM0.47063 8.74677L5.25323 13.5294C5.6271 13.9032 6.13423 13.9726 6.5739 13.9298C7.0195 13.8863 7.50493 13.721 7.99077 13.486C8.9684 13.0129 10.0873 12.1889 11.1381 11.1381C12.1889 10.0873 13.0129 8.9684 13.486 7.99077C13.721 7.50493 13.8863 7.0195 13.9298 6.5739C13.9726 6.13423 13.9032 5.6271 13.5294 5.25323L8.74677 0.470623C8.28423 0.00809339 7.6255 0.00857661 7.09537 0.122587C6.53603 0.242877 5.91113 0.528063 5.27987 0.916003C4.49927 1.39572 3.6627 2.06118 2.86193 2.86193C2.06118 3.66267 1.39572 4.49927 0.916007 5.27987C0.52807 5.91113 0.242883 6.53603 0.122593 7.09537C0.00857995 7.6255 0.00809672 8.28423 0.47063 8.74677V8.74677Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold">
                Legal Chicks
              </h3>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 mb-2">
                © 2024 Legal Chicks Poultry Farm. All rights
                reserved.
              </p>
              <p className="text-white/60">
                Proudly serving Cagayan, Philippines
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}