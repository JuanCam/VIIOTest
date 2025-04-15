import './pricing-tier-card.css';

interface PricingTierCardProps {
  planName: string;
  price: string|number;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

function formatPrice(price: string|number) {
  if (typeof price === 'string') {
    return price;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

const PricingTierCard = ({ planName, price, features, isFeatured, ctaText }: PricingTierCardProps) => (<article className={`pricing-tier-card${isFeatured ? ' pricing-tier-card--is-featured ': ' '}font-semibold border-2 p-4 rounded-md`}>
  <header className="pricing-tier-card__header pb-1">
    <h2 className="text-lg">{planName}</h2>
    <p className="text-sm font-normal">{formatPrice(price)}</p>
  </header>
  <div className="pricing-tier-card__body">
    <ul className="pricing-tier-card__features pb-3">
      {features.map((feature) => (<li className="pricing-tier-card__feature text-sm">{feature}</li>))}
    </ul>
    <button data-content={ctaText} className="pricing-tier-card__cta text-base rounded-sm">{ctaText}</button>

  </div>
  </article>);

export default PricingTierCard;
