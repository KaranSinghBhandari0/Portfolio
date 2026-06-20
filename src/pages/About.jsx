function TimelineItem({ side, title, subtitle, date }) {
  return (
    <div className={`container ${side}`}>
      <div className="content">
        <div className="tag">
          <p className="font-semibold text-[#ff6f61] text-xl mb-3">{title}</p>
        </div>
        <div className="desc">
          <h4>{subtitle}</h4>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const timelineData = [
    {
      side: "left",
      title: "SDE Internship",
      subtitle: "Software Development Intern at Nykaa",
      date: "Jan 2026 - Present",
    },
    {
      side: "right",
      title: "SDE Internship",
      subtitle: "Software Development Intern at Hypercode",
      date: "June 2025 - Aug 2025",
    },
    {
      side: "left",
      title: "DSA",
      subtitle: "Learning Data Structure and Algorithms",
      date: "2022 - Present",
    },
    {
      side: "right",
      title: "College",
      subtitle:
        "Joined Delhi Technological University (Mathematics and Computing)",
      date: "Nov 2022 - Present",
    },
  ];

  return (
    <div className="min-h-screen pt-16" id="about">
      <section
        className="experience w-full max-w-7xl mx-auto"
        id="experience"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl mb-6 font-bold">
          <i className="fas fa-user text-[#ff6f61] mr-3"></i>
          About
        </h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              side={item.side}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
