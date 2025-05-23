"use client";
import { Code, CornerDownRight, Minus, MousePointerClick } from "lucide-react";
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
import { queries } from "@/lib/strings";

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
          query: queries.manage_form_data,
        },
      ],
    },
    {
      title: "Web Application",
      items: [
        {
          name: "Create, view, update, and delete farmer profiles",
          query: queries.manage_farmer_profiles,
        },
        {
          name: "Create, view, update, and delete agricultural field records",
          query: queries.manange_field_records,
        },
        {
          name: "Display count of submitted form types",
          query: queries.count_of_submitted_forms,
        },
        {
          name: "Show the rate of data collection over time",
          query: queries.rate_of_data_collection,
        },
        {
          name: "View overall yield",
          query: queries.view_overall_yield,
        },
        {
          name: "View yield by season",
          query: queries.view_yield_by_season,
        },
        {
          name: "View yield by province, municipality, and barangay",
          query: queries.view_yield_by_location,
        },
        {
          name: "View overall damage assessment by season",
          query: queries.view_overall_damage_assessment_by_season,
        },
        {
          name: "View overall damage assessment by province, municipality, and barangay",
          query: queries.view_overall_damage_assessment_by_location,
        },
        {
          name: "View damage by cause",
          query: queries.view_damage_by_cause,
        },
        {
          name: "View average fertilizer application frequency per hectare (avg/ha)",
          query: queries.view_fertilizer_application_frequency,
        },
        {
          name: "View most commonly used fertilizer types and brands",
          query: queries.view_commonly_used_fertilizer_types_and_brands,
        },
        {
          name: "View average nutrient inputs (NPK/ha)",
          query: queries.view_avg_nutrient_inputs,
        },
        {
          name: "View most practiced crop establishment methods (e.g., transplanting, direct seeding)",
          query: queries.view_most_practiced_crop_establishments,
        },
        {
          name: "View common plant spacing practices",
          query: queries.view_common_plant_spacing_practices,
        },
        {
          name: "View most planted rice varieties",
          query: queries.view_most_planted_rice_varieties,
        },
        {
          name: "View total number of registered farmers",
          query: queries.view_total_number_of_registered_farmers,
        },
        {
          name: "View farmer distribution across provinces, municipalities, and barangays",
          query: queries.view_farmer_distribution_by_location,
        },
        {
          name: "View farmer demographics by age group and gender",
          query: queries.view_farmer_demographics_by_age_group_and_gender,
        },
        {
          name: "View total land area under rice cultivation across provinces, municipalities, and barangays",
          query: queries.view_total_land_area_under_rice_cultivation,
        },
        {
          name: "Compare field counts across provinces, municipalities, and barangays",
          query: queries.compare_field_counts_by_location,
        },
        {
          name: "Compare yield performance across provinces, municipalities, and barangays.",
          query: queries.compare_field_counts_by_location,
        },
        {
          name: "Compare yield performance by season (dry vs. wet)",
          query: queries.compare_yield_performance_by_season,
        },
        {
          name: "Compare yield performance by crop establishment method",
          query: queries.compare_yield_by_crop_establishment_method,
        },
        {
          name: "Compare yield performance by rice variety",
          query: queries.compare_yield_performance_by_variety,
        },
        {
          name: "Compare overall damage assessments across provinces, municipalities, and barangays",
          query: queries.compare_overall_damage_assessment,
        },
        {
          name: "Compare damage assessments by season (dry vs. wet)",
          query: queries.compare_damage_assessments_by_season,
        },
        {
          name: "Compare damage assessments by cause",
          query: queries.compare_damage_assessment_by_cause,
        },
        {
          name: "Create, view, update, and delete user accounts",
          query: queries.manage_user_account,
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
            <CornerDownRight
              size={22}
              className="hidden md:block text-muted-foreground/50 pr-1 pt-1 shrink-0"
            />
            <span className="whitespace-normal break-words">{item.name}</span>
            {/* <ArrowUpRight className="size-3.5 shrink-0" /> */}
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
              <li key={idx} className="pl-2 space-y-3">
                <div className="flex items-center gap-2">
                  <Minus
                    size={24}
                    className="hidden md:block text-muted-foreground"
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
        <SheetContent side="bottom" className="p-4 pb-8 ">
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
