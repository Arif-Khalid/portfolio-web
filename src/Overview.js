export default function Overview() {
  // todo include picture of me at the side
  return (
    <div className="overview">
      <img src="logo192.png" alt="test" />
      <section className="overview--about">
        <h1>Who am I?</h1>
        <article className="overview--about--description">
          My name is Arif. I am a Computer Engineering student currently
          studying at the National University of Singapore. I am always looking
          to improve myself by learning and building new things. This website
          was not made through any template but my own hard work, following over
          100 hours of courses, starting all the way from JavaScript
          fundamentals.
        </article>
        <article className="overview--education">
          <div className="overview--education--title">
            Studying until May 2025
          </div>
          <div className="overview--education--school">
            <span className="course">Computer Engineering</span> in{" "}
            <span className="school">National University of Singapore</span>
          </div>
        </article>
      </section>
    </div>
  );
}
