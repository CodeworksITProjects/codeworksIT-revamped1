import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { X, FileText, FileImage, File, Cloud, Shield, Server, Smartphone, Headphones, Laptop, ArrowRight, Calendar, Code, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and management with enterprise-grade security and scalability.",
    features: ["AWS & Azure", "Migration Support", "24/7 Monitoring"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions to safeguard your digital assets.",
    features: ["Threat Detection", "Compliance", "Security Audits"],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Robust server solutions and network architecture designed for peak performance.",
    features: ["Server Management", "Network Design", "Performance Optimization"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Modernize your business processes with innovative technology and automation.",
    features: ["Process Automation", "Digital Strategy", "Technology Integration"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Laptop,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT investments with business objectives.",
    features: ["IT Strategy", "Technology Planning", "Digital Roadmap"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Comprehensive IT management and monitoring to keep your systems optimal.",
    features: ["Proactive Monitoring", "Help Desk", "Maintenance"],
    color: "from-teal-500 to-blue-500"
  }
];

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [additionalDocs, setAdditionalDocs] = useState<File[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  // Remove sortedPositions and positions usage

  return (
    <>
      {/* Job Positions Section */}
      <section id="careers" className="py-0 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              Careers
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help us build the future of IT solutions. Explore our current openings below.
            </p>
          </div>
          {/* Radial Orbital Timeline below heading/description */}
          <div className="mb-0 mt-0">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
          {/* Removed job cards grid here */}
        </div>
      </section>
      {/* Application Form Section */}
      <section className="py-0 bg-gradient-to-b from-white to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-0">
          <div className="text-center mt-0 mb-0">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            Join Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Careers at CodeWorksIT
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We’re always looking for talented, passionate professionals to join our growing team. Apply to be part of a company that values innovation, growth, and work-life balance.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Apply Now</h3>
          {submitted ? (
            <div className="text-green-600 text-lg font-medium text-center py-8">
              Thank you for applying! We’ll review your application and get back to you soon.
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                setSubmitted(true);
              }}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name and Surname side by side */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" required placeholder="Your Name" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Surname <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" required placeholder="Your Surname" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>
                {/* Position Applying For full width */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Position Applying For <span className="text-red-500">*</span>
                  </label>
                  <select required className="h-12 w-full rounded-xl border-gray-200 focus:border-blue-500 px-3">
                    <option value="">Select a position</option>
                      {/* positions.map((pos, i) => ( */}
                        {/* <option key={i} value={pos.title}>{pos.title}</option> */}
                      {/* ))} */}
                  </select>
                </div>
                {/* Email and Phone side by side */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" required placeholder="you@email.com" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="e.g. +27 12 345 6789" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>
                {/* LinkedIn/Portfolio full width */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn/Portfolio</label>
                  <Input type="url" placeholder="https://linkedin.com/in/yourprofile or portfolio" className="h-12 rounded-xl border-gray-200 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Cover Letter <span className="text-red-500">*</span>
                </label>
                <Textarea required placeholder="Tell us why you’re a great fit..." className="min-h-[100px] rounded-xl border-gray-200 focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Upload CV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="h-12 rounded-xl border-gray-200 focus:border-blue-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-700 w-full"
                    onChange={e => {
                      if (e.target.files && e.target.files[0]) {
                        setCvFile(e.target.files[0]);
                      }
                    }}
                  />
                  {cvFile && (
                    <div className="mt-2 flex items-center bg-blue-50 border border-blue-200 rounded-lg p-2 w-fit">
                      {/* Icon logic for CV file */}
                      {(() => {
                        let icon = <File className="w-4 h-4 mr-2 text-blue-400" />;
                        if (/\.pdf$/i.test(cvFile.name)) {
                          icon = <File className="w-4 h-4 mr-2 text-red-500" />;
                        } else if (/\.(doc|docx)$/i.test(cvFile.name)) {
                          icon = <FileText className="w-4 h-4 mr-2 text-blue-700" />;
                        }
                        return icon;
                      })()}
                      <span className="text-gray-700 text-sm">{cvFile.name}</span>
                      <button
                        type="button"
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full opacity-70 transition"
                        aria-label={`Remove ${cvFile.name}`}
                        onClick={() => setCvFile(null)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                  <span className="text-xs text-gray-500">PDF, DOC, or DOCX. Max 5MB.</span>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Documents (optional)</label>
                  {/* Use native input for better file handling */}
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    className="h-12 rounded-xl border-gray-200 focus:border-blue-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-700 w-full"
                    onChange={e => {
                      if (e.target.files) {
                        const newFiles = Array.from(e.target.files);
                        setAdditionalDocs(prev => {
                          const existingKeys = new Set(prev.map(f => f.name + f.size + f.lastModified));
                          const filtered = newFiles.filter(f => !existingKeys.has(f.name + f.size + f.lastModified));
                          return [...prev, ...filtered];
                        });
                        e.target.value = "";
                      }
                    }}
                  />
                  <span className="text-xs text-gray-500">Please rename the upload field so we can select files easily.</span>
                  {additionalDocs.length > 0 && (
                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="text-sm font-semibold text-blue-700 mb-2">Selected Files:</div>
                      <ul className="space-y-1">
                        {additionalDocs.map((file, idx) => {
                          let icon = <File className="w-4 h-4 mr-2 text-blue-400" />;
                          if (/\.pdf$/i.test(file.name)) {
                            icon = <File className="w-4 h-4 mr-2 text-red-500" />;
                          } else if (/\.(doc|docx)$/i.test(file.name)) {
                            icon = <FileText className="w-4 h-4 mr-2 text-blue-700" />;
                          } else if (/\.(png|jpe?g)$/i.test(file.name)) {
                            icon = <FileImage className="w-4 h-4 mr-2 text-green-500" />;
                          } else if (/\.(txt)$/i.test(file.name)) {
                            icon = <FileText className="w-4 h-4 mr-2 text-gray-500" />;
                          }
                          return (
                            <li key={idx} className="flex items-center text-gray-700 text-sm group">
                              {icon}
                              {file.name}
                              <button
                                type="button"
                                className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full opacity-70 group-hover:opacity-100 transition"
                                aria-label={`Remove ${file.name}`}
                                onClick={() => setAdditionalDocs(prev => prev.filter((_, i) => i !== idx))}
                              >
                                <X size={16} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Submit Application
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
    </>
  );
} 