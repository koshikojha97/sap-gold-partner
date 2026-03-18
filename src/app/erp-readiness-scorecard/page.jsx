"use client";

import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, ArrowRight, ArrowLeft, BarChart3, Clock, PoundSterling, TrendingUp, Package, FileText, Users, Zap, Calendar, Mail, Building, ChevronDown, Sparkles } from 'lucide-react';

const ERPReadinessScorecard = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '', phone: '' });
  const [showResults, setShowResults] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
 
  const questions = [
    {
      id: 'monthEnd',
      category: 'Financial Visibility',
      icon: Clock,
      question: 'How long does your month-end close process take?',
      options: [
        { value: 5, label: '1-3 days', description: 'Fast and efficient' },
        { value: 3, label: '4-7 days', description: 'Manageable but room for improvement' },
        { value: 1, label: '8-14 days', description: 'Significantly impacting decisions' },
        { value: 0, label: '15+ days', description: 'Major bottleneck' }
      ]
    },
    {
      id: 'realTimeData',
      category: 'Financial Visibility',
      icon: BarChart3,
      question: 'Can you access real-time financial data when you need it?',
      options: [
        { value: 5, label: 'Yes, instantly via dashboards', description: 'Full visibility anytime' },
        { value: 3, label: 'Within a few hours if I ask the team', description: 'Delayed but available' },
        { value: 1, label: 'Only at month-end', description: 'Flying blind most of the month' },
        { value: 0, label: 'We rely on spreadsheets', description: 'No single source of truth' }
      ]
    },
    {
      id: 'marginAccuracy',
      category: 'Financial Visibility',
      icon: PoundSterling,
      question: 'How confident are you in your product/job margin calculations?',
      options: [
        { value: 5, label: 'Very confident — fully automated', description: 'Trust the numbers completely' },
        { value: 3, label: 'Mostly confident — some manual adjustments', description: 'Generally reliable' },
        { value: 1, label: 'Not very confident — lots of estimates', description: 'Educated guesses' },
        { value: 0, label: 'We don\'t track margins properly', description: 'No visibility' }
      ]
    },
    {
      id: 'inventoryVisibility',
      category: 'Operations',
      icon: Package,
      question: 'Can you see real-time inventory levels across all locations?',
      options: [
        { value: 5, label: 'Yes, live visibility everywhere', description: 'Complete control' },
        { value: 3, label: 'Yes, but updated daily/weekly', description: 'Some delay but usable' },
        { value: 1, label: 'Partially — some locations only', description: 'Gaps in visibility' },
        { value: 0, label: 'No — we count manually or use spreadsheets', description: 'No real-time view' }
      ]
    },
    {
      id: 'stockouts',
      category: 'Operations',
      icon: AlertTriangle,
      question: 'How often do you experience unexpected stockouts or overstocking?',
      options: [
        { value: 5, label: 'Rarely — demand planning works well', description: 'Under control' },
        { value: 3, label: 'Occasionally — a few times per quarter', description: 'Manageable but costly' },
        { value: 1, label: 'Frequently — monthly issues', description: 'Significant problem' },
        { value: 0, label: 'Constantly — it\'s a major pain point', description: 'Critical issue' }
      ]
    },
    {
      id: 'orderProcessing',
      category: 'Operations',
      icon: FileText,
      question: 'How much manual work is involved in processing orders?',
      options: [
        { value: 5, label: 'Minimal — mostly automated', description: 'Efficient process' },
        { value: 3, label: 'Some manual steps but manageable', description: 'Room for improvement' },
        { value: 1, label: 'Significant — lots of data re-entry', description: 'Time-consuming' },
        { value: 0, label: 'Highly manual — prone to errors', description: 'Major inefficiency' }
      ]
    },
    {
      id: 'systemIntegration',
      category: 'Technology',
      icon: Zap,
      question: 'How well do your business systems talk to each other?',
      options: [
        { value: 5, label: 'Fully integrated — data flows automatically', description: 'Seamless operations' },
        { value: 3, label: 'Partially integrated — some manual transfers', description: 'Works but has gaps' },
        { value: 1, label: 'Minimal integration — lots of imports/exports', description: 'Disconnected systems' },
        { value: 0, label: 'No integration — everything is manual', description: 'Complete silos' }
      ]
    },
    {
      id: 'reportGeneration',
      category: 'Technology',
      icon: BarChart3,
      question: 'How do you generate management reports?',
      options: [
        { value: 5, label: 'Automated dashboards — always up to date', description: 'Self-service analytics' },
        { value: 3, label: 'System reports with some Excel work', description: 'Manageable process' },
        { value: 1, label: 'Mostly Excel — pulling from multiple sources', description: 'Time-intensive' },
        { value: 0, label: 'Entirely manual — takes days', description: 'Major bottleneck' }
      ]
    },
    {
      id: 'scalability',
      category: 'Growth',
      icon: TrendingUp,
      question: 'Is your current system holding back growth?',
      options: [
        { value: 5, label: 'No — it scales with our business', description: 'Future-proof' },
        { value: 3, label: 'Starting to feel some limitations', description: 'Manageable for now' },
        { value: 1, label: 'Yes — we\'re working around it constantly', description: 'Becoming a barrier' },
        { value: 0, label: 'Definitely — it\'s a major constraint', description: 'Critical blocker' }
      ]
    },
    {
      id: 'userFrustration',
      category: 'Growth',
      icon: Users,
      question: 'How frustrated is your team with the current system?',
      options: [
        { value: 5, label: 'Not at all — they love it', description: 'High satisfaction' },
        { value: 3, label: 'Somewhat — occasional complaints', description: 'Tolerable' },
        { value: 1, label: 'Very — frequent workarounds needed', description: 'Impacting morale' },
        { value: 0, label: 'Extremely — it\'s affecting retention', description: 'Critical issue' }
      ]
    }
  ];

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((total / maxScore) * 100);
    return { total, maxScore, percentage };
  };

  const getScoreCategory = (percentage) => {
    if (percentage >= 80) return {
      level: 'green',
      title: 'Green Zone',
      subtitle: 'Your systems are working well',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-700',
      icon: CheckCircle,
      description: 'Your current setup appears to be serving your business effectively. Focus on optimising what you have rather than replacing it.',
      recommendation: 'Consider periodic reviews to ensure you\'re maximising your current system\'s capabilities. Look at advanced features you may not be using.'
    };
    if (percentage >= 50) return {
      level: 'amber',
      title: 'Amber Zone',
      subtitle: 'Growing pains are showing',
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700',
      icon: AlertTriangle,
      description: 'You\'re experiencing friction that\'s likely costing you time and money. These issues typically compound as you grow.',
      recommendation: 'Now is the ideal time to evaluate your options. You have enough pain to justify change but enough stability to plan properly rather than react in crisis.'
    };
    return {
      level: 'red',
      title: 'Red Zone',
      subtitle: 'Your system is actively costing you',
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-700',
      icon: XCircle,
      description: 'Your current system is likely a significant drag on productivity, profitability, and growth. The hidden costs are probably much higher than you realise.',
      recommendation: 'Urgent action recommended. Every month of delay compounds the problem. A proper ERP evaluation should be a priority this quarter.'
    };
  };

  const getCategoryScores = () => {
    const categories = {};
    questions.forEach(q => {
      if (!categories[q.category]) {
        categories[q.category] = { total: 0, max: 0, questions: [] };
      }
      categories[q.category].max += 5;
      categories[q.category].total += answers[q.id] || 0;
      categories[q.category].questions.push(q);
    });
    return categories;
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('contact');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
    setCurrentStep('results');
  };

  const score = calculateScore();
  const category = getScoreCategory(score.percentage);
  const categoryScores = getCategoryScores();

  // Intro Screen
  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-8 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <BarChart3 size={32} />
              </div>
              <h1 className="text-3xl font-bold mb-2">ERP Readiness Scorecard</h1>
              <p className="text-orange-100">Is your current system holding back your business?</p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-center">
                Answer 10 quick questions to discover whether your current systems are supporting your growth — or silently costing you time, money, and opportunities.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-600">2 min</p>
                  <p className="text-xs text-gray-500">To complete</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-600">10</p>
                  <p className="text-xs text-gray-500">Questions</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-600">Free</p>
                  <p className="text-xs text-gray-500">Instant results</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>Benchmark against industry standards</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>Identify your biggest operational gaps</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>Get personalised recommendations</span>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep('questions')}
                className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Start Assessment
                <ArrowRight size={20} />
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                Your responses are confidential. No spam, ever.
              </p>
            </div>
          </div>
          
          <p className="text-center text-slate-400 text-sm mt-6">
            Powered by Silver Touch Technologies • SAP Gold Partner
          </p>
        </div>
      </div>
    );
  }

  // Questions Screen
  if (currentStep === 'questions') {
    const q = questions[currentQuestion];
    const progress = ((currentQuestion) / questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div 
                className="h-full bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="p-8">
              {/* Question Counter & Category */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {q.category}
                </span>
              </div>
              
              {/* Question */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-orange-100 rounded-xl flex-shrink-0">
                  <q.icon className="text-orange-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 pt-2">
                  {q.question}
                </h2>
              </div>
              
              {/* Options */}
              <div className="space-y-3">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-orange-700">
                          {option.label}
                        </p>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={20} />
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Back Button */}
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="mt-6 flex items-center gap-2 text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft size={16} />
                  Previous question
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Contact Form Screen
  if (currentStep === 'contact' && !showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-6 text-white text-center">
              <Sparkles size={32} className="mx-auto mb-2" />
              <h2 className="text-2xl font-bold">Your Results Are Ready!</h2>
              <p className="text-orange-100">Enter your details to see your personalised report</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="James Wilson"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="james@company.co.uk"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Acme Manufacturing Ltd"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+44 7700 900000"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-6 py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-amber-600 transition-all flex items-center justify-center gap-2"
              >
                View My Results
                <ArrowRight size={20} />
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                We'll send a copy of your results to your email. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (currentStep === 'results') {
    const CategoryIcon = category.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
            <div className={`${category.bgColor} p-8 text-center border-b-4 ${category.borderColor}`}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4`}>
                <CategoryIcon className={category.textColor} size={40} />
              </div>
              <h1 className={`text-3xl font-bold ${category.textColor} mb-1`}>{category.title}</h1>
              <p className="text-gray-600">{category.subtitle}</p>
            </div>
            
            <div className="p-8">
              {/* Score Display */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                    <circle 
                      cx="80" cy="80" r="70" 
                      stroke={category.level === 'green' ? '#22c55e' : category.level === 'amber' ? '#f59e0b' : '#ef4444'}
                      strokeWidth="12" 
                      fill="none"
                      strokeDasharray={`${score.percentage * 4.4} 440`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className={`text-4xl font-bold ${category.textColor}`}>{score.percentage}%</p>
                      <p className="text-sm text-gray-500">Readiness Score</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className={`p-4 ${category.bgColor} rounded-xl mb-6`}>
                <p className={`${category.textColor}`}>{category.description}</p>
              </div>
              
              {/* Recommendation */}
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-orange-500">
                <p className="font-medium text-gray-800 mb-1">Our Recommendation</p>
                <p className="text-gray-600 text-sm">{category.recommendation}</p>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Score Breakdown by Area</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {Object.entries(categoryScores).map(([catName, data]) => {
                const catPercentage = Math.round((data.total / data.max) * 100);
                const catColor = catPercentage >= 70 ? 'green' : catPercentage >= 40 ? 'amber' : 'red';
                
                return (
                  <div key={catName}>
                    <button
                      onClick={() => setExpandedSection(expandedSection === catName ? null : catName)}
                      className="w-full"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">{catName}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${
                            catColor === 'green' ? 'text-green-600' : 
                            catColor === 'amber' ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {catPercentage}%
                          </span>
                          <ChevronDown 
                            size={16} 
                            className={`text-gray-400 transition-transform ${expandedSection === catName ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${
                            catColor === 'green' ? 'bg-green-500' : 
                            catColor === 'amber' ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${catPercentage}%` }}
                        />
                      </div>
                    </button>
                    
                    {expandedSection === catName && (
                      <div className="mt-3 pl-4 border-l-2 border-gray-200 space-y-2">
                        {data.questions.map(q => {
                          const answer = answers[q.id];
                          const answerLabel = q.options.find(o => o.value === answer)?.label || 'Not answered';
                          return (
                            <div key={q.id} className="flex justify-between text-sm">
                              <span className="text-gray-600">{q.question}</span>
                              <span className={`font-medium ${
                                answer >= 4 ? 'text-green-600' : 
                                answer >= 2 ? 'text-amber-600' : 'text-red-600'
                              }`}>
                                {answerLabel}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl shadow-2xl overflow-hidden p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Want to discuss your results?</h2>
            <p className="text-orange-100 mb-6">
              Book a free 30-minute ERP Strategy Session with one of our consultants. 
              No sales pitch — just practical advice based on your score.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Strategy Session
              </button>
              <button className="px-6 py-3 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 transition-all flex items-center justify-center gap-2">
                <Mail size={20} />
                Email My Results
              </button>
            </div>
            
            <p className="text-orange-200 text-sm mt-6">
              Questions? Contact us at sap@silvertouch.com
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-400 text-sm mt-6">
            © Silver Touch Technologies • SAP Gold Partner • UK
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ERPReadinessScorecard;
