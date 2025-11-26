interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-tech transition-all duration-500 cursor-pointer">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="font-heading text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </div>
    </div>
  );
};

export default CategoryCard;
