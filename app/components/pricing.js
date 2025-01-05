// app/components/pricing-cards.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PricingCardsComponent extends Component {
  @tracked tooltipContent = '';
  @tracked tooltipPosition = { x: 0, y: 0 };
  @tracked isTooltipVisible = false;

  @action
  showTooltip(event) {
    const tooltipText = event.currentTarget.getAttribute('data-tooltip');
    this.tooltipContent = tooltipText;
    this.updateTooltipPosition(event);
    this.isTooltipVisible = true;
  }

  @action
  hideTooltip() {
    this.isTooltipVisible = false;
  }

  @action
  updateTooltipPosition(event) {
    this.tooltipPosition = {
      x: event.clientX,
      y: event.clientY - 40 // Position above the cursor
    };
  }

  pricingPlans = [
  {
    title: 'Basic Plan',
    price: '₹10,000',
    description: 'A simple static website designed for impactful online representation',
    tooltip: 'Recommended for startups and small businesses',
    isPopular: false,
    features: [
      { text: 'Customized Template', included: true },
      { text: 'Up to 5 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Support Included', included: true },
      { text: 'Backend Functionality', included: false },
      { text: 'E-commerce setup', included: false },
      { text: 'Priority Support', included: false },
      { text: 'Advanced Analytics', included: false }
    ]
  },
  {
    title: 'Standard Plan',
    price: '₹15,000',
    description: 'Feature-packed with basic backend functionality and seamless performance',
    tooltip: 'Most suitable for growing businesses',
    isPopular: true,
    features: [
      { text: 'Customized Template', included: true },
      { text: 'Up to 8 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Backend Functionality', included: true },
      { text: 'E-commerce setup', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Up to 20 Products', included: true },
      { text: 'Custom Features', included: false },
      { text: 'Advanced Page Analytics', included: false },
      { text: 'Advanced Security', included: false }
    ]
  },
  {
    title: 'Premium Plan',
    price: '₹25,000',
    description: 'A robust, dynamic website with payment gateways and advanced features',
    tooltip: 'Ideal for large-scale businesses with complex needs',
    isPopular: false,
    features: [
      { text: 'Customized Template', included: true },
      { text: 'Up to 12 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Full Backend Support', included: true },
      { text: 'E-commerce setup', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Up to 50 Products', included: true },
      { text: 'Advanced Page Analytics', included: true },
      { text: 'Custom Features', included: true },
      { text: 'Multi-Language Support', included: true },
      { text: 'Advanced Security Protocols', included: true },
      { text: 'Dedicated Support Manager', included: true }
    ]
  }
];
}