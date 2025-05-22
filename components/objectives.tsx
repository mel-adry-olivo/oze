import { ArrowUpRight, ChevronRight } from "lucide-react";
import React, { memo } from "react";
import { Button } from "./ui/button";

// types.ts
export type NestedItem = string | NestedHeading;

export interface NestedHeading {
  heading: string;
  subItems: NestedItem[];
}

export interface SpecificObjective {
  title: string;
  items: NestedHeading[];
}

export interface ObjectivesData {
  general: {
    title: string;
    description: string;
  };
  specific: SpecificObjective[];
}

const objectivesData: ObjectivesData = {
  general: {
    title: "General Objective",
    description:
      "To design and implement a centralized and synchronized database system that supports multi-stage agricultural data acquisition and analysis for rice cultivation.",
  },
  specific: [
    {
      title: "Mobile Application",
      items: [
        {
          heading: "Manage entry forms via mobile application",
          subItems: ["Submit, view, update, and delete collected form data"],
        },
      ],
    },
    {
      title: "Web Application",
      items: [
        {
          heading: "Manage farmer and field profiles",
          subItems: [
            "Create, view, update, and delete farmer profiles",
            "Create, view, update, and delete agricultural field records",
          ],
        },
        {
          heading: "View data collection insights",
          subItems: [
            "Display count of submitted form types",
            "Show the rate of data collection over time",
          ],
        },
        {
          heading: "View descriptive analytics",
          subItems: [
            "View overall yield",
            "View yield by season",
            "View yield by province, municipality, and barangay",
            "View overall damage assessment by season",
            "View overall damage assessment by province, municipality, and barangay",
            "View damage by cause",
            "View average fertilizer application frequency per hectare (avg/ha)",
            "View most commonly used fertilizer types and brands",
            "View average nutrient inputs (NPK/ha)",
            "View most practiced crop establishment methods (e.g., transplanting, direct seeding)",
            "View common plant spacing practices",
            "View most planted rice varieties",
            "View total number of registered farmers",
            "View farmer distribution across provinces, municipalities, and barangays",
            "View farmer demographics by age group and gender",
            "View total land area under rice cultivation across provinces, municipalities, and barangays",
          ],
        },
        {
          heading: "View comparative analysis",
          subItems: [
            "Compare field counts across provinces, municipalities, and barangays",
            "Compare yield performance across provinces, municipalities, and barangays.",
            "Compare yield performance by season (dry vs. wet)",
            "Compare yield performance by crop establishment method",
            "Compare yield performance by rice variety",
            "Compare overall damage assessments across provinces, municipalities, and barangays",
            "Compare damage assessments by season (dry vs. wet)",
            "Compare damage assessments by cause",
          ],
        },
        {
          heading: "Manage user accounts",
          subItems: ["Create, view, update, and delete user accounts"],
        },
      ],
    },
  ],
};

// Static color classes for nested items
const colorClasses = ["text-foreground/80", "text-muted-foreground"];

interface NestedListProps {
  items: NestedItem[];
  level?: number;
}

const NestedList: React.FC<NestedListProps> = memo(({ items, level = 2 }) => {
  const colorClass = colorClasses[Math.min(level - 2, colorClasses.length - 1)];

  return (
    <ul className={`pl-4 space-y-6 ${colorClass}`}>
      {items.map((item, idx) => (
        <li key={idx} className="pl-4 space-y-4">
          {typeof item === "object" && "heading" in item ? (
            <>
              <div className="flex items-center gap-2">
                <ChevronRight size={16} />
                <p className="font-semibold">{item.heading}</p>
              </div>
              {item.subItems && (
                <NestedList items={item.subItems} level={level + 2} />
              )}
            </>
          ) : (
            <Button
              className={`text-base cursor-pointer gap-1 ${colorClass} whitespace-normal text-left leading-relaxed hover:text-foreground`}
              variant="link"
            >
              {item}
              <ArrowUpRight className="size-3.5" />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
});

const Objectives: React.FC = () => (
  <article
    className="flex flex-col gap-5 max-w-[80ch] scroll-mt-14"
    id="objectives"
  >
    <h3 className="text-2xl font-medium text-foreground">Objectives</h3>

    <section className="space-y-3">
      <h4 className="text-lg font-semibold text-foreground">
        {objectivesData.general.title}
      </h4>
      <p className="text-muted-foreground">
        {objectivesData.general.description}
      </p>
    </section>

    <section className="space-y-3">
      <h4 className="text-lg font-semibold text-foreground">
        Specific Objectives
      </h4>
      <ul className="pl-4 space-y-8">
        {objectivesData.specific.map((section, idx) => (
          <li key={idx} className="space-y-3">
            <div className="flex items-center gap-1">
              <ChevronRight size={17} />
              <h5 className="text-lg font-medium text-foreground">
                {section.title}
              </h5>
            </div>
            <NestedList items={section.items} level={2} />
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default Objectives;
