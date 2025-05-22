"use client";
import {
  ArrowUpRight,
  Code,
  CornerDownRight,
  MousePointerClick,
} from "lucide-react";
import React, { memo } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CodeEditor } from "./ui/editor";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

// types.ts
export type SubItem = {
  name: string;
  query: string;
};

export interface SpecificObjective {
  title: string;
  items: SubItem[];
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
          name: "Submit, view, update, and delete collected form data",
          query: "SELECT * FROM mobile_entry_forms;",
        },
      ],
    },
    {
      title: "Web Application",
      items: [
        {
          name: "Create, view, update, and delete farmer profiles",
          query: "SELECT * FROM farmer_profiles;",
        },
        {
          name: "Create, view, update, and delete agricultural field records",
          query: "SELECT * FROM field_records;",
        },
        {
          name: "Display count of submitted form types",
          query:
            "SELECT form_type, COUNT(*) FROM submissions GROUP BY form_type;",
        },
        {
          name: "Show the rate of data collection over time",
          query:
            "SELECT DATE(submitted_at) as date, COUNT(*) \nFROM submissions \nGROUP BY DATE(submitted_at);",
        },
        {
          name: "View overall yield",
          query: "SELECT AVG(yield) as overall_yield FROM yield_data;",
        },
        {
          name: "View yield by season",
          query: "SELECT season, AVG(yield) FROM yield_data GROUP BY season;",
        },
        {
          name: "View yield by province, municipality, and barangay",
          query:
            "SELECT province, municipality, barangay, AVG(yield) FROM yield_data GROUP BY province, municipality, barangay;",
        },
        {
          name: "View overall damage assessment by season",
          query:
            "SELECT season, AVG(damage_score) FROM damage_assessment GROUP BY season;",
        },
        {
          name: "View overall damage assessment by province, municipality, and barangay",
          query:
            "SELECT province, municipality, barangay, AVG(damage_score) FROM damage_assessment GROUP BY province, municipality, barangay;",
        },
        {
          name: "View damage by cause",
          query:
            "SELECT cause, COUNT(*) FROM damage_assessment GROUP BY cause;",
        },
        {
          name: "View average fertilizer application frequency per hectare (avg/ha)",
          query: "SELECT AVG(applications_per_ha) FROM fertilizer_usage;",
        },
        {
          name: "View most commonly used fertilizer types and brands",
          query:
            "SELECT type, brand, COUNT(*) FROM fertilizer_usage GROUP BY type, brand ORDER BY COUNT(*) DESC;",
        },
        {
          name: "View average nutrient inputs (NPK/ha)",
          query:
            "SELECT AVG(nitrogen), AVG(phosphorus), AVG(potassium) FROM fertilizer_usage;",
        },
        {
          name: "View most practiced crop establishment methods (e.g., transplanting, direct seeding)",
          query:
            "SELECT method, COUNT(*) FROM crop_establishment GROUP BY method;",
        },
        {
          name: "View common plant spacing practices",
          query:
            "SELECT spacing, COUNT(*) FROM plant_spacing GROUP BY spacing;",
        },
        {
          name: "View most planted rice varieties",
          query:
            "SELECT variety, COUNT(*) FROM rice_varieties GROUP BY variety ORDER BY COUNT(*) DESC;",
        },
        {
          name: "View total number of registered farmers",
          query: "SELECT COUNT(*) FROM farmer_profiles;",
        },
        {
          name: "View farmer distribution across provinces, municipalities, and barangays",
          query:
            "SELECT province, municipality, barangay, COUNT(*) FROM farmer_profiles GROUP BY province, municipality, barangay;",
        },
        {
          name: "View farmer demographics by age group and gender",
          query:
            "SELECT age_group, gender, COUNT(*) FROM farmer_profiles GROUP BY age_group, gender;",
        },
        {
          name: "View total land area under rice cultivation across provinces, municipalities, and barangays",
          query:
            "SELECT province, municipality, barangay, SUM(area_ha) FROM field_records GROUP BY province, municipality, barangay;",
        },
        {
          name: "Compare field counts across provinces, municipalities, and barangays",
          query:
            "SELECT province, municipality, barangay, COUNT(*) FROM field_records GROUP BY province, municipality, barangay;",
        },
        {
          name: "Compare yield performance across provinces, municipalities, and barangays.",
          query:
            "SELECT province, municipality, barangay, AVG(yield) FROM yield_data GROUP BY province, municipality, barangay;",
        },
        {
          name: "Compare yield performance by season (dry vs. wet)",
          query: "SELECT season, AVG(yield) FROM yield_data GROUP BY season;",
        },
        {
          name: "Compare yield performance by crop establishment method",
          query:
            "SELECT method, AVG(yield) FROM yield_data JOIN crop_establishment ON yield_data.field_id = crop_establishment.field_id GROUP BY method;",
        },
        {
          name: "Compare yield performance by rice variety",
          query: "SELECT variety, AVG(yield) FROM yield_data GROUP BY variety;",
        },
        {
          name: "Compare overall damage assessments across provinces, municipalities, and barangays",
          query:
            "SELECT province, municipality, barangay, AVG(damage_score) FROM damage_assessment GROUP BY province, municipality, barangay;",
        },
        {
          name: "Compare damage assessments by season (dry vs. wet)",
          query:
            "SELECT season, AVG(damage_score) FROM damage_assessment GROUP BY season;",
        },
        {
          name: "Compare damage assessments by cause",
          query:
            "SELECT cause, COUNT(*) FROM damage_assessment GROUP BY cause;",
        },
        {
          name: "Create, view, update, and delete user accounts",
          query: "SELECT * FROM user_accounts;",
        },
      ],
    },
  ],
};

interface NestedListProps {
  items: SubItem[];
  level?: number;
}

const NestedList: React.FC<
  NestedListProps & {
    onSelect: (subItem: SubItem) => void;
  }
> = memo(({ items, onSelect }) => {
  return (
    <ul className={`md:pl-4 space-y-8`}>
      {items.map((item, idx) => (
        <li key={idx} className="md:pl-4">
          <Button
            variant="link"
            className={`text-muted-foreground text-sm md:text-base cursor-pointer gap-1 font-normal whitespace-normal text-left leading-snug h-fit w-fit hover:text-foreground flex items-start`}
            onClick={() => onSelect(item)}
          >
            <span className="whitespace-normal break-words">{item.name}</span>
            <ArrowUpRight className="size-3.5 shrink-0" />
          </Button>
          {/* <Separator className="my-1" /> */}
        </li>
      ))}
    </ul>
  );
});

const Objectives = () => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState<SubItem | undefined>();

  const handleSelect = (q: SubItem) => {
    setItem(q);
    setOpen(true);
  };

  return (
    <>
      <article
        className="flex flex-col gap-5 max-w-prose scroll-mt-14"
        id="objectives"
      >
        <h1 className="section-title">Objectives</h1>
        <section className="space-y-3">
          <h4 className="text-base md:text-xl font-semibold text-foreground">
            {objectivesData.general.title}
          </h4>
          <p className="text-muted-foreground">
            {objectivesData.general.description}
          </p>
        </section>

        <section className="space-y-3">
          <h4 className="text-base md:text-xl font-semibold text-foreground">
            Specific Objectives
          </h4>
          <Alert className="mb-8">
            <MousePointerClick className="h-4 w-4" />
            <AlertTitle>Tip</AlertTitle>
            <AlertDescription>
              You can click on the objectives to see the query.
            </AlertDescription>
          </Alert>
          <ul className="space-y-8">
            {objectivesData.specific.map((section, idx) => (
              <li key={idx} className="space-y-3">
                <div className="flex items-center gap-4">
                  <CornerDownRight
                    size={20}
                    className="hidden md:block text-muted-foreground/30"
                  />
                  <h5 className="text-base md:text-lg font-medium text-foreground">
                    {section.title}
                  </h5>
                </div>
                <NestedList items={section.items} onSelect={handleSelect} />
              </li>
            ))}
          </ul>
        </section>
      </article>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <span className="hidden">Hidden Trigger</span>
        </SheetTrigger>
        <SheetContent side="bottom" className="p-4 pb-24">
          <SheetHeader>
            <SheetTitle className="text-xl md:text-2xl font-semibold flex items-center gap-3">
              <Code size={28} />
              Query
            </SheetTitle>
            <SheetDescription className="mt-4 text-base text-foreground">
              <span className="text-muted-foreground font-light">
                Objective:{" "}
              </span>
              {item?.name}
            </SheetDescription>
            <CodeEditor
              value={item?.query}
              language="sql"
              readOnly
              className="mt-4"
              padding={12}
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: 14,
                background: "#f5f5f5",
              }}
            />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Objectives;
