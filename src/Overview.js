export default function Overview() {
  // todo include picture of me at the side
  return (
    <div className="overview">
      <img src="profilePic.png" alt="test" />
      <section className="overview--about">
        <article className="overview--about--description">
          <h1>Who am I?</h1>
          My name is <span className="bold">Arif</span>. I am a Computer
          Engineering student currently studying at the National University of
          Singapore. I am always looking to improve myself by learning and
          building new things. This website was not made through any template
          but my own hard work, following over 100 hours of courses, starting
          all the way from JavaScript fundamentals.
        </article>
        <article className="overview--education">
          <h1 className="overview--education--title">
            Studying until May 2025
          </h1>
          <div className="overview--education--school">
            <span className="course highlight bold">Computer Engineering</span>{" "}
            in <span className="school">National University of Singapore</span>
          </div>
        </article>
      </section>
    </div>
  );
}
