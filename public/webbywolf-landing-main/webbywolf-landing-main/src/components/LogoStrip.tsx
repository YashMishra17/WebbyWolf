const LogoStrip = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
          Trusted by leading companies
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-8 text-muted-foreground font-bold text-lg hover:text-primary transition-colors">Logo 1</div>
          <div className="h-8 text-muted-foreground font-bold text-lg hover:text-primary transition-colors">Logo 2</div>
          <div className="h-8 text-muted-foreground font-bold text-lg hover:text-primary transition-colors">Logo 3</div>
          <div className="h-8 text-muted-foreground font-bold text-lg hover:text-primary transition-colors">Logo 4</div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
