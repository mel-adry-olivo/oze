export default function Rationale() {
  return (
    <article
      className="flex flex-col gap-4 max-w-[80ch] scroll-mt-14"
      id="rationale"
    >
      <h1 className="text:base md:text-2xl font-medium text-foreground">
        Rationale
      </h1>

      <div className="space-y-4">
        <p className="text-section">
          Efficient agricultural data management is crucial for ensuring the
          sustainability and productivity of rice farming, particularly in the
          Western Visayas region. The existing technologies for data gathering
          in rice cultivation face challenges such as human error during data
          input, inconsistencies across collected data, and limited
          functionality in areas with poor or no internet connectivity. These
          issues lead to fragmented and delayed information, making it difficult
          for stakeholders to make timely and informed decisions. To address
          these challenges, the system focuses on building a centralized and
          synchronized database that supports offline-first data collection,
          error-free data collection through input validation and standardized
          formats, and integrates analytics for descriptive, comparative, and
          predictive insights.
        </p>

        <p className="text-section">
          The database architecture is designed to enable reliable storage,
          retrieval, and synchronization of data collected through mobile
          applications. Field agents can gather information on farmers&apos;
          profiles, farming practices, crop conditions, and harvest results,
          even without internet connectivity. Once reconnected, the system
          automatically synchronizes the data with a centralized database
          accessible through a web dashboard.
        </p>

        <p className="text-section">
          This system makes sure that the data collected is accurate, easy to
          understand, and can be visualized using descriptive, comparative and
          predictive analysis. It helps the Department of Agriculture quickly
          access useful information. The database plays an important role in
          supporting smart decision-making and properly distributing resources
          for managing rice farming in the region.
        </p>
      </div>
    </article>
  );
}
