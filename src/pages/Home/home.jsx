import Chat from "../../assets/img/icon-chat.png";
import Money from "../../assets/img/icon-money.png";
import Security from "../../assets/img/icon-security.png";
import FeaturesHome from "../../components/Features/FeaturesHome";

export const Home = () => {
  const data = [
    {
      title: "You are our #1 priority",
      alt: "Chat Icon",
      contend:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      title: "More savings means higher rates",
      alt: "money Icon",
      contend:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      title: "Security you can trust",
      alt: "security Icon",
      contend:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesHome
          image={Chat}
          alt={data[0].alt}
          title={data[0].title}
          description={data[0].contend}
        />
        <FeaturesHome
          image={Money}
          alt={data[1].alt}
          title={data[1].title}
          description={data[1].contend}
        />
        <FeaturesHome
          image={Security}
          alt={data[2].alt}
          title={data[2].title}
          description={data[2].contend}
        />
      </section>
    </main>
  );
};
