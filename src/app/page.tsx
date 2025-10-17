"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award, Leaf, Star } from "lucide-react";

const assetMap = [
  {"id":"heroImage","url":"https://images.pexels.com/photos/972838/pexels-photo-972838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious assortment of croissants and pastries in a wicker basket, perfect for breakfast or a sweet treat."},
  {"id":"featureImage","url":"https://images.pexels.com/photos/20372619/pexels-photo-20372619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Tempting bakery assortment featuring croissants and sweets in a cozy indoor setting."},
  {"id":"productImage1","url":"https://images.pexels.com/photos/600620/pexels-photo-600620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of homemade rustic sourdough bread, highlighting its texture and crust."},
  {"id":"productImage2","url":"https://images.pexels.com/photos/972838/pexels-photo-972838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious assortment of croissants and pastries in a wicker basket, perfect for breakfast or a sweet treat."},
  {"id":"productImage3","url":"https://images.pexels.com/photos/34315403/pexels-photo-34315403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"artisan pastry - Photo by Travel with  Lenses"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Bakery Delight"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Wholesome Baked Goods"
            description="Experience the taste of tradition with our freshly baked artisan bread."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Discover More", href: "products" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Bakery Delight"
            description="At Bakery Delight, we are passionate about crafting delicious and wholesome baked goods from scratch."
            bulletPoints={[
              { title: "Artisan Quality", description: "Handcrafted with precision", icon: Award },
              { title: "Fresh Ingredients", description: "Locally sourced and organic", icon: Leaf }
            ]}
            imageSrc={assetMap.find(a => a.id === "featureImage")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Delicacies"
            description="Explore our wide range of irresistible baked goods."
            products={[
              { id: "1", brand: "Bakery Delight", name: "Sourdough Bread", price: "$5.00", rating: 5, reviewCount: "100", imageSrc: assetMap.find(a => a.id === "productImage1")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", brand: "Bakery Delight", name: "Chocolate Croissant", price: "$3.50", rating: 5, reviewCount: "200", imageSrc: assetMap.find(a => a.id === "productImage2")?.url ?? "/public/images/placeholder.webp" },
              { id: "3", brand: "Bakery Delight", name: "Artisan Pastry", price: "$4.00", rating: 4, reviewCount: "150", imageSrc: assetMap.find(a => a.id === "productImage3")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Sarah Mitchell", role: "Food Critic", testimonial: "The quality of the bread and pastries is outstanding. Highly recommended!", icon: Star }
            ]}
            title="Customer Reviews"
            description="See what our customers have to say"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="We're here to help. Reach out with any questions or feedback."
            inputPlaceholder="Your email address"
            buttonText="Submit"
            termsText="We respect your privacy. Your information is safe with us."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [
                { label: "Home", href: "home" },
                { label: "About Us", href: "about" }
              ]},
              { title: "Products", items: [
                { label: "Our Delicacies", href: "products" },
                { label: "Special Offers", href: "offers" }
              ]},
              { title: "Connect", items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" }
              ]}
            ]}
            copyrightText="© 2025 Bakery Delight"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}