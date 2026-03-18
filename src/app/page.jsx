"use client";
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, BarChart3, Clock, TrendingUp, Package, PoundSterling, Users, Building, Star, Quote, ChevronDown, ChevronUp, Zap, Target, AlertTriangle, FileText, Phone, Mail, MapPin, Linkedin, Play } from 'lucide-react';

const ERPScorecardLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showScorecard, setShowScorecard] = useState(false);

  const painPoints = [
    {
      icon: Clock,
      title: "Month-end close taking 10+ days?",
      description: "Finance teams spending weeks reconciling data instead of providing strategic insights."
    },
    {
      icon: Package,
      title: "Inventory accuracy below 95%?",
      description: "Stockouts costing you sales while overstock ties up working capital."
    },
    {
      icon: PoundSterling,
      title: "Can't trust your margin reports?",
      description: "Making pricing decisions based on estimates rather than real-time data."
    },
    {
      icon: BarChart3,
      title: "Living in spreadsheet chaos?",
      description: "Multiple versions of the truth making it impossible to get reliable insights."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Identify Hidden Gaps",
      description: "Discover the operational blind spots that are silently costing your business money."
    },
    {
      icon: BarChart3,
      title: "Benchmark Your Position",
      description: "See how your systems compare to industry best practices and competitors."
    },
    {
      icon: Zap,
      title: "Get Actionable Insights",
      description: "Receive personalised recommendations based on your specific situation."
    },
    {
      icon: TrendingUp,
      title: "Plan Your Next Move",
      description: "Understand whether to optimise, upgrade, or transform your current systems."
    }
  ];

  const testimonials = [
    {
      quote: "The scorecard highlighted issues we'd been ignoring for years. Within 6 months of implementing SAP Business One, our month-end close went from 12 days to 3.",
      author: "James Richardson",
      role: "Finance Director",
      company: "Precision Engineering Ltd",
      industry: "Manufacturing"
    },
    {
      quote: "I was sceptical at first, but the assessment was spot-on. It gave us the business case we needed to finally make the investment in proper systems.",
      author: "Sarah Mitchell",
      role: "Managing Director",
      company: "Midlands Distribution Co",
      industry: "Wholesale"
    },
    {
      quote: "We scored in the 'red zone' — no surprise given the chaos we dealt with daily. Silver Touch helped us transform our operations completely.",
      author: "David Chen",
      role: "Operations Director",
      company: "TechParts UK",
      industry: "Distribution"
    }
  ];

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The ERP Readiness Scorecard takes approximately 2-3 minutes to complete. It consists of 10 carefully designed questions covering financial visibility, operations, technology, and growth readiness."
    },
    {
      question: "Is this really free? What's the catch?",
      answer: "Yes, completely free with no obligation. We created this tool to help UK businesses understand their operational maturity. If you'd like to discuss your results with us afterwards, we're happy to help — but there's absolutely no pressure or sales pitch required."
    },
    {
      question: "What happens after I complete the scorecard?",
      answer: "You'll instantly see your personalised results, including your overall score, breakdown by category, and specific recommendations. We'll also email you a copy for your records. If you score in the amber or red zone, you can optionally book a free strategy session to discuss next steps."
    },
    {
      question: "Who is this assessment designed for?",
      answer: "The scorecard is designed for Finance Directors, Managing Directors, and Operations leaders at UK SMEs (typically £2M-£100M revenue) in manufacturing, distribution, wholesale, and trading sectors. If you're questioning whether your current systems can support your growth, this assessment is for you."
    },
    {
      question: "What systems does this relate to?",
      answer: "The assessment evaluates your readiness regardless of your current system — whether you're using Sage, QuickBooks, Xero, spreadsheets, or even an older ERP. It helps you understand if your systems are supporting or hindering your business."
    },
    {
      question: "How is my score calculated?",
      answer: "Your score is calculated based on your responses across four key areas: Financial Visibility (30%), Operations (30%), Technology (20%), and Growth Readiness (20%). Each area is weighted based on its impact on business performance."
    },
    {
      question: "What do the different score zones mean?",
      answer: "Green Zone (80%+): Your systems are working well — focus on optimisation. Amber Zone (50-79%): Growing pains are showing — ideal time to evaluate options. Red Zone (below 50%): Your systems are actively costing you money — urgent action recommended."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We take data protection seriously and comply fully with UK GDPR requirements. Your assessment responses are used solely to generate your personalised report. We never share your information with third parties."
    }
  ];

  const stats = [
    { value: "500+", label: "UK Businesses Assessed" },
    { value: "47%", label: "Average Score on First Assessment" },
    { value: "£127K", label: "Average Annual Savings After Improvement" },
    { value: "65%", label: "Reduction in Month-End Close Time" }
  ];

  const scrollToScorecard = () => {
    setShowScorecard(true);
    setTimeout(() => {
      document.getElementById('scorecard-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Silver Touch</p>
              <p className="text-xs text-gray-500">SAP Gold Partner</p>
            </div>
          </div>
          <button
            onClick={scrollToScorecard}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all text-sm"
          >
            Take Free Assessment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm mb-6">
                <BarChart3 size={16} />
                Free Assessment Tool
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Is Your ERP System <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Holding Back</span> Your Business?
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Take our free 2-minute assessment to discover whether your current systems are supporting your growth — or silently costing you time, money, and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToScorecard}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Your Free Score
                  <ArrowRight size={20} />
                </button>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  See How It Works
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Takes only 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>100% free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Instant results</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-4">
                    <BarChart3 size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">ERP Readiness Scorecard</h3>
                  <p className="text-slate-400 text-sm">For UK Manufacturing & Distribution SMEs</p>
                </div>
                
                <div className="space-y-4">
                  {['Financial Visibility', 'Operational Efficiency', 'Technology Integration', 'Growth Readiness'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        i === 0 ? 'bg-red-500/20 text-red-400' :
                        i === 1 ? 'bg-amber-500/20 text-amber-400' :
                        i === 2 ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-slate-300">{item}</span>
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${
                          i === 0 ? 'bg-red-500 w-1/3' :
                          i === 1 ? 'bg-amber-500 w-1/2' :
                          i === 2 ? 'bg-green-500 w-3/4' :
                          'bg-blue-500 w-2/3'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    47%
                  </p>
                  <p className="text-sm text-slate-400">Average first-time score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-800 py-8 px-4 border-y border-slate-700">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are the symptoms UK businesses experience when their systems can't keep up with growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 rounded-xl flex-shrink-0">
                    <point.icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">
              If you're experiencing any of these issues, you're not alone — and there's a clear path forward.
            </p>
            <button
              onClick={scrollToScorecard}
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all inline-flex items-center gap-2"
            >
              Find Out Your Score
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How the Scorecard Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to understand your operational readiness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Answer 10 Questions",
                description: "Quick, focused questions about your financial processes, operations, and technology. Takes just 2 minutes.",
                icon: FileText
              },
              {
                step: "02",
                title: "Get Your Score",
                description: "Receive an instant assessment with your overall readiness score and breakdown by category.",
                icon: BarChart3
              },
              {
                step: "03",
                title: "See Recommendations",
                description: "Get personalised insights based on your specific situation and practical next steps.",
                icon: Target
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <div className="text-6xl font-bold text-orange-100 absolute top-4 right-6">
                    {item.step}
                  </div>
                  <div className="relative">
                    <div className="p-3 bg-orange-100 rounded-xl inline-flex mb-4">
                      <item.icon className="text-orange-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-orange-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The scorecard gives you clarity on where you stand and what to do next.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="p-3 bg-orange-100 rounded-xl inline-flex mb-4">
                  <benefit.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What UK Businesses Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of UK companies who have used the scorecard to transform their operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="text-orange-200 mb-2" size={32} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-orange-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard Embed Section */}
      <section id="scorecard-section" className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See Your Score?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Take the free assessment now and get your personalised results instantly.
          </p>
          
          {!showScorecard ? (
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6">
                <BarChart3 size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ERP Readiness Scorecard</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                10 questions. 2 minutes. Instant results with personalised recommendations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  100% Free
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  No Credit Card
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  Instant Results
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  GDPR Compliant
                </div>
              </div>
              
              <button
                onClick={() => setShowScorecard(true)}
                className="px-12 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-amber-600 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Start Free Assessment
                <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-left">
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  [Scorecard Component Would Render Here]
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  In production, this would load the interactive ERP Readiness Scorecard component.
                </p>
              </div>
              <button
                onClick={() => setShowScorecard(false)}
                className="text-orange-600 hover:text-orange-700 text-sm"
              >
                ← Back to overview
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the ERP Readiness Scorecard.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="text-orange-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don't Let Your Systems Hold You Back
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Take 2 minutes to discover whether your business is operating at its full potential — or leaving money on the table.
          </p>
          <button
            onClick={scrollToScorecard}
            className="px-12 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all inline-flex items-center gap-2 shadow-lg"
          >
            Get Your Free Score Now
            <ArrowRight size={20} />
          </button>
          <p className="text-orange-200 text-sm mt-6">
            Join 500+ UK businesses who have already taken the assessment
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider">Trusted By UK Businesses</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Manufacturing', 'Distribution', 'Wholesale', 'Trading', 'Engineering', 'Food & Bev'].map((industry, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <Building size={20} />
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ST</span>
                </div>
                <div>
                  <p className="font-bold">Silver Touch</p>
                  <p className="text-xs text-slate-400">SAP Gold Partner</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Helping UK SMEs transform their operations with intelligent ERP solutions since 1992.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">SAP Business One</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SAP S/4HANA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Implementation Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support & Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale & Distribution</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Food & Beverage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trading</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+44 (0) 123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>sap@silvertouchtech.co.uk</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>London, United Kingdom</span>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={16} />
                  <a href="#" className="hover:text-white transition-colors">Follow us on LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 Silver Touch Technologies UK Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema.org Structured Data for SEO (would be in head) */}
      {/* 
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "ERP Readiness Scorecard",
        "description": "Free assessment tool for UK businesses to evaluate their ERP system readiness",
        "url": "https://silvertouchtech.co.uk/erp-readiness-scorecard",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "provider": {
          "@type": "Organization",
          "name": "Silver Touch Technologies UK",
          "url": "https://silvertouchtech.co.uk"
        }
      }
      </script>
      */}
    </div>
  );
};

export default ERPScorecardLandingPage;
