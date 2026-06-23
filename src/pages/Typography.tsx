import styles from './Typography.module.css';

const sampleText = "The quick brown fox jumps over the lazy dog";

function Typography() {
  return (
    <div className="container mx-auto p-16">
      <h1 className="text-4xl mb-3">
        Typography
      </h1>

      {/* Primary Typefaces */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Primary Typeface</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Santa Clara Nueva</h3>
          {[
            { label: "Regular", weight: 400, italic: false },
            { label: "Italic", weight: 400, italic: true },
            { label: "Medium", weight: 500, italic: false },
            { label: "Bold", weight: 700, italic: false },
            { label: "Bold Italic", weight: 700, italic: true },
            { label: "Heavy", weight: 800, italic: false },
            { label: "Black", weight: 900, italic: false },
          ].map(({ label, weight, italic }) => (
            <div key={label} className={styles.weightRow}>
              <span className={styles.weightLabel}>{label} ({weight})</span>
              <span
                className={`${styles.santaClaraNueva} ${styles.sample}`}
                style={{ fontWeight: weight, fontStyle: italic ? "italic" : "normal" }}
              >
                {sampleText}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Minion Pro</h3>
          {[
            { label: "Regular", weight: 400, italic: false },
            { label: "Italic", weight: 400, italic: true },
            { label: "Semibold", weight: 600, italic: false },
            { label: "Bold", weight: 700, italic: false },
            { label: "Bold Italic", weight: 700, italic: true },
          ].map(({ label, weight, italic }) => (
            <div key={label} className={styles.weightRow}>
              <span className={styles.weightLabel}>{label} ({weight})</span>
              <span
                className={`${styles.minionPro} ${styles.sample}`}
                style={{ fontWeight: weight, fontStyle: italic ? "italic" : "normal" }}
              >
                {sampleText}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Typefaces */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Secondary Typeface</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Figtree</h3>
          {[
            { label: "Light", weight: 300, italic: false },
            { label: "Regular", weight: 400, italic: false },
            { label: "Italic", weight: 400, italic: true },
            { label: "Medium", weight: 500, italic: false },
            { label: "Semibold", weight: 600, italic: false },
            { label: "Bold", weight: 700, italic: false },
            { label: "ExtraBold", weight: 800, italic: false },
            { label: "Black", weight: 900, italic: false },
          ].map(({ label, weight, italic }) => (
            <div key={label} className={styles.weightRow}>
              <span className={styles.weightLabel}>{label} ({weight})</span>
              <span
                className={`${styles.figtree} ${styles.sample}`}
                style={{ fontWeight: weight, fontStyle: italic ? "italic" : "normal" }}
              >
                {sampleText}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Crimson Pro</h3>
          {[
            { label: "ExtraLight", weight: 200, italic: false },
            { label: "Light", weight: 300, italic: false },
            { label: "Regular", weight: 400, italic: false },
            { label: "Italic", weight: 400, italic: true },
            { label: "Medium", weight: 500, italic: false },
            { label: "Semibold", weight: 600, italic: false },
            { label: "Bold", weight: 700, italic: false },
            { label: "Bold Italic", weight: 700, italic: true },
            { label: "ExtraBold", weight: 800, italic: false },
            { label: "Black", weight: 900, italic: false },
          ].map(({ label, weight, italic }) => (
            <div key={label} className={styles.weightRow}>
              <span className={styles.weightLabel}>{label} ({weight})</span>
              <span
                className={`${styles.crimsonPro} ${styles.sample}`}
                style={{ fontWeight: weight, fontStyle: italic ? "italic" : "normal" }}
              >
                {sampleText}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Typography;
