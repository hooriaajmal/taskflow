// src/data/content.js
import { CheckCircle, Users, BarChart3 } from 'lucide-react';

export const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    title: "Smart Task Management",
    description: "Organize your tasks with intelligent categorization, priority levels, and due date tracking. Never miss a deadline again."
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team. Share projects, assign tasks, and track progress in real-time with powerful collaboration tools."
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights into your productivity patterns with detailed analytics and performance tracking dashboards."
  }
];

export const reviews = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    content: "TaskFlow has transformed how our team manages projects. The intuitive interface and powerful features make task management effortless.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Mike Chen",
    role: "Freelance Designer",
    content: "As a freelancer juggling multiple clients, TaskFlow keeps me organized and productive. The smart notifications are a game-changer!",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Davis",
    role: "Startup Founder",
    content: "We've tried many task management tools, but TaskFlow's collaboration features and clean design make it our go-to choice.",
    rating: 5,
    avatar: "ED"
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Up to 10 tasks",
      "Basic task management",
      "Mobile app access",
      "Email support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    features: [
      "Unlimited tasks",
      "Advanced analytics",
      "Team collaboration (up to 5 members)",
      "Priority support",
      "Custom integrations"
    ],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: "$24",
    period: "per month",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced security",
      "Custom workflows",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];