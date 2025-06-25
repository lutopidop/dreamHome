import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/back.jpg')" }}>
      <div className="inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white">
        <div className="absolute bottom-0 left-8 flex flex-col space-y-4">
          <a href="#" className="text-white">
            <Linkedin />
          </a>
          <a href="#" className="text-white">
            <Twitter />
          </a>
          <a href="#" className="text-white">
            <Instagram />
          </a>
          <a href="#" className="text-white">
            <Facebook />
          </a>
        </div>
        <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="text-sm font-medium text-black">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Rent/Buy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="buy">Buy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-black">Location</label>
              <Input placeholder="New York, USA" />
            </div>
            <div>
              <label className="text-sm font-medium text-black">Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="House" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-black">Price</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Per Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="per-month">Per Month</SelectItem>
                  <SelectItem value="per-year">Per Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-black text-white self-end">Search Now</Button>
          </div>
        </div>
        <h1 className="text-8xl font-bold opacity-50">DREAM HOME</h1>
        <div className="absolute top-3/5 right-4 text-center">
          <p className="max-w-sm">
            Find the perfect place to call home with our comprehensive listings and expert guidance. Start your journey today and discover your dream home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;