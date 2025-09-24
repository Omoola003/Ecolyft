import FAQItem from "./FAQItem";

export default function FAQSection({ category, items }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
        {category}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
}
