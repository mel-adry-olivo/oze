export const rationale = `
Efficient agricultural data management is crucial for ensuring the sustainability and productivity of rice farming, particularly in the Western Visayas region. The existing technologies for data gathering in rice cultivation face challenges such as human error during data input, inconsistencies across collected data, and limited functionality in areas with poor or no internet connectivity. These issues lead to fragmented and delayed information, making it difficult for stakeholders to make timely and informed decisions. To address these challenges, the system focuses on building a centralized and synchronized database that supports offline-first data collection, error-free data collection through input validation and standardized formats, and integrates analytics for descriptive, comparative, and predictive insights.
The database architecture is designed to enable reliable storage, retrieval, and synchronization of data collected through mobile applications. Field agents can gather information on farmers' profiles, farming practices, crop conditions, and harvest results, even without internet connectivity. Once reconnected, the system automatically synchronizes the data with a centralized database accessible through a web dashboard.
This system makes sure that the data collected is accurate, easy to understand, and can be visualized using descriptive, comparative and predictive analysis. It helps the Department of Agriculture quickly access useful information. The database plays an important role in supporting smart decision-making and properly distributing resources for managing rice farming in the region.
`;

export const queries = {
  manage_form_data: `
    -------------------------------------------
    -------------- CREATE ---------------------
    -------------------------------------------

    -- Field Activity (id auto-generated)
    INSERT INTO field_activities (
      id,
      field_id,
      data_collector_id,
      data_analyst_id,
      activity_type,
      collected_at,
      img_urls,
      notes
    )
    VALUES (
      3,
      1, -- field_id
      1, -- data_collector_id
      NULL, -- data_analyst_id
      'Baseline Survey',
      NOW(),
      '["http://image.com/photo1.jpg"]',
      'Initial activity notes'
    );


    -- Field Planning
    INSERT INTO field_planning (
      id,
      field_activity_id,
      land_prep_date,
      planned_crop_establishment_date,
      planned_crop_establishment_method,
      total_field_area_ha,
      monitoring_field_area_sqm,
      soil_type,
      current_field_condition,
      crop_planted,
      crop_status
    ) VALUES (
      3,
      3,
      '2025-05-01',
      '2025-05-10',
      'Transplanting',
      2.5,
      500.0,
      'Clay Loam',
      'Fallow',
      'Rice',
      'Not Yet Planted'
    );

    -- Crop Establishment
    INSERT INTO crop_establishments(
      id,
      field_activity_id,
      actual_crop_establishment_date,
      actual_crop_establishment_method,
      seedling_age_at_transplanting,
      avg_plant_distance_between,
      avg_plant_distance_within,
      seeding_rate,
      direct_seeded_method,
      rice_variety,
      rice_variety_no,
      rice_maturity_duration,
      seed_type,
      source_of_good_seeds,
      type_of_ecosystem,
      source_of_irrigation,
      type_of_irrigation
    ) VALUES(
      3,
      3,
      '2025-05-12',
      'Manual Transplanting',
      21,
      20.0,
      15.0,
      80.0,
      'None',
      'IR64',
      '123',
      120,
      'Certified',
      'DA Certified Supplier',
      'Irrigated Lowland',
      'River',
      'Gravity'
    );

    -- Fertilization Record
    INSERT INTO fertilization_records(
      id,
      field_activity_id,
      fertilized_area_sqm
    ) VALUES (
      3,
      3,
      450.0
    );


    INSERT INTO fertilizer_applications(
      id,
      fertilization_record_id,
      fertilizer_type,
      brand_name,
      nitrogen_content,
      phosphorus_content,
      potassium_content,
      amount,
      unit,
      crop_stage_on_application
    ) VALUES (
      3,
      3,
      'Complete Fertilizer',
      'GrowMax',
      14.0,
      14.0,
      14.0,
      50.0,
      'kg',
      'Vegetative'
    );


    -- Crop Cut
    INSERT INTO crop_cuts(
      id,
      field_activity_id,
      crop_cut_date,
      avg_crop_cut_yield
    ) VALUES(
      3,
      3,
      '2025-09-15',
      5.5
    );

    -- Monitoring Visit
    INSERT INTO monitoring_visits(
      id,
      field_activity_id,
      date_monitored,
      crop_status,
      soil_moisture_status,
      avg_plant_height
    ) VALUES(
      3,
      3,
      '2025-06-01',
      'Tillering',
      'Moist',
      45.0
    );

    -- Harvest Record
    INSERT INTO harvest_records(
      id,
      field_activity_id,
      harvest_date,
      harvest_method,
      bags_harvested,
      avg_bag_weight_kg,
      harvested_area_ha,
      irrigation_adequacy
    ) VALUES(
      3,
      3,
      '2025-09-30',
      'Manual',
      75,
      50.0,
      2.3,
      'Sufficient'
    );

    -- Damage Assessment
    INSERT INTO damage_assessments(
      id,
      field_activity_id,
      cause,
      crop_stage,
      soil_type,
      severity,
      affected_area_ha,
      observed_pest
    )
    VALUES(
      3,
      3,
      'Flooding',
      'Vegetative',
      'Clay Loam',
      'Moderate',
      0.2,
      'Rice Bug'
    );


    -------------------------------------------
    -------------- VIEW ---------------------
    -------------------------------------------

    SELECT
      fa.id AS field_activity_id,
      fa.field_id,
      fa.data_collector_id,
      fa.activity_type,
      fa.collected_at,
      fa.img_urls,
      fa.notes,

      -- Field Planning
      fp.land_prep_date,
      fp.planned_crop_establishment_date,
      fp.planned_crop_establishment_method,
      fp.total_field_area_ha,
      fp.monitoring_field_area_sqm,
      fp.soil_type,
      fp.current_field_condition,
      fp.crop_planted,
      fp.crop_status,

      -- Crop Establishment
      ce.actual_crop_establishment_date,
      ce.actual_crop_establishment_method,
      ce.seedling_age_at_transplanting,
      ce.avg_plant_distance_between,
      ce.avg_plant_distance_within,
      ce.seeding_rate,
      ce.direct_seeded_method,
      ce.rice_variety,
      ce.rice_variety_no,
      ce.rice_maturity_duration,
      ce.seed_type,
      ce.source_of_good_seeds,
      ce.type_of_ecosystem,
      ce.source_of_irrigation,
      ce.type_of_irrigation,

      -- Fertilization Record
      fr.id AS fertilization_record_id,
      fr.fertilized_area_sqm,

      -- Crop Cuts
      cc.crop_cut_date,
      cc.avg_crop_cut_yield,

      -- Monitoring Visits
      mv.date_monitored,
      mv.crop_status AS monitoring_crop_status,
      mv.soil_moisture_status,
      mv.avg_plant_height,

      -- Harvest Records
      hr.harvest_date,
      hr.harvest_method,
      hr.bags_harvested,
      hr.avg_bag_weight_kg,
      hr.harvested_area_ha,
      hr.irrigation_adequacy,

      -- Damage Assessments
      da.cause,
      da.crop_stage,
      da.soil_type AS damage_soil_type,
      da.severity,
      da.affected_area_ha,
      da.observed_pest

    FROM field_activities fa
    LEFT JOIN field_planning fp ON fp.field_activity_id = fa.id
    LEFT JOIN crop_establishments ce ON ce.field_activity_id = fa.id
    LEFT JOIN fertilization_records fr ON fr.field_activity_id = fa.id
    LEFT JOIN crop_cuts cc ON cc.field_activity_id = fa.id
    LEFT JOIN monitoring_visits mv ON mv.field_activity_id = fa.id
    LEFT JOIN harvest_records hr ON hr.field_activity_id = fa.id
    LEFT JOIN damage_assessments da ON da.field_activity_id = fa.id

    WHERE fa.id = 2;


    -------------------------------------------
    -------------- UPDATE ---------------------
    -------------------------------------------

    -- 1. Update Field Activity
    UPDATE field_activities
    SET
      field_id = 1,
      data_collector_id = 1,
      activity_type = 'Planting',
      img_urls = '["image1.jpg", "image2.jpg"]',
      notes = 'Initial field survey with photo attachments'
    WHERE id = 2;

    -- 2. Update Field Planning
    UPDATE field_planning
    SET
      land_prep_date = '2025-05-01',
      planned_crop_establishment_date = '2025-05-10',
      planned_crop_establishment_method = 'Transplanting',
      total_field_area_ha = 2.50,
      monitoring_field_area_sqm = 500.00,
      soil_type = 'Loam',
      current_field_condition = 'Prepared',
      crop_planted = 'Rice',
      crop_status = 'Seedling'
    WHERE field_activity_id = 2;

    -- 3. Update Crop Establishment
    UPDATE crop_establishments
    SET
      actual_crop_establishment_date = '2025-05-11',
      actual_crop_establishment_method = 'Transplanted',
      seedling_age_at_transplanting = 18,
      avg_plant_distance_between = 0.25,
      avg_plant_distance_within = 0.20,
      seeding_rate = 80.00,
      direct_seeded_method = 'None',
      rice_variety = 'NSIC Rc222',
      rice_variety_no = 'Rc222',
      rice_maturity_duration = 120,
      seed_type = 'Certified',
      source_of_good_seeds = 'PhilRice',
      type_of_ecosystem = 'Irrigated',
      source_of_irrigation = 'Canal',
      type_of_irrigation = 'Flood'
    WHERE field_activity_id = 2;

    -- 4. Update Fertilization Records
    UPDATE fertilization_records
    SET
      fertilized_area_sqm = 480.00
    WHERE field_activity_id = 2;

    -- 5. Update Fertilizer Application (example: application_id = 1, fertilization_record_id = 1)
    UPDATE fertilizer_applications
    SET
      fertilizer_type = 'Complete',
      brand_name = 'GrowFast',
      nitrogen_content = 14.00,
      phosphorus_content = 14.00,
      potassium_content = 14.00,
      amount = 50.00,
      unit = 'kg',
      crop_stage_on_application = 'Early vegetative'
    WHERE id = 1 AND fertilization_record_id = 1;

    -- 6. Update Crop Cuts
    UPDATE crop_cuts
    SET
      crop_cut_date = '2025-08-15',
      avg_crop_cut_yield = 4.50
    WHERE field_activity_id = 2;

    -- 7. Update Monitoring Visits
    UPDATE monitoring_visits
    SET
      date_monitored = '2025-06-01',
      crop_status = 'Tillering',
      soil_moisture_status = 'Moist',
      avg_plant_height = 35.00
    WHERE field_activity_id = 2;


    -- 8. Update Harvest Records
    UPDATE harvest_records
    SET
      harvest_date = '2025-09-20',
      harvest_method = 'Manual',
      bags_harvested = 60,
      avg_bag_weight_kg = 50.00,
      harvested_area_ha = 2.00,
      irrigation_adequacy = 'Adequate'
    WHERE field_activity_id = 2;

    -- 9. Update Damage Assessments
    UPDATE damage_assessments
    SET
      cause = 'Pest',
      crop_stage = 'Booting',
      soil_type = 'Loam',
      severity = 'Moderate',
      affected_area_ha = 0.5,
      observed_pest = 'Brown Planthopper'
    WHERE field_activity_id = 2;

    -------------------------------------------
    -------------- DELETE ---------------------
    -------------------------------------------

    -- 1. Delete Fertilizer Applications
    DELETE FROM fertilizer_applications
    WHERE fertilization_record_id IN (
      SELECT id FROM fertilization_records WHERE field_activity_id = 2
    );

    -- 2. Delete Fertilization Records
    DELETE FROM fertilization_records
    WHERE field_activity_id = 2;

    -- 3. Delete Crop Cuts
    DELETE FROM crop_cuts
    WHERE field_activity_id = 2;

    -- 4. Delete Monitoring Visits
    DELETE FROM monitoring_visits
    WHERE field_activity_id = 2;

    -- 5. Delete Harvest Records
    DELETE FROM harvest_records
    WHERE field_activity_id = 2;

    -- 6. Delete Damage Assessments
    DELETE FROM damage_assessments
    WHERE field_activity_id = 2;

    -- 7. Delete Crop Establishments
    DELETE FROM crop_establishments
    WHERE field_activity_id = 2;

    -- 8. Delete Field Planning
    DELETE FROM field_planning
    WHERE field_activity_id = 2;

    -- 9. Finally, delete Field Activity itself
    DELETE FROM field_activities
    WHERE id = 2;
  `,
  manage_farmer_profiles: `
    -- CREATE: Insert a new farmer record with explicit id
    INSERT INTO farmer (id, fname, lname, birthdate, gender, phone_no, synced_at)
    VALUES (3, 'Jose', 'Ramos', '1990-01-05', 'Male', '+63-912-345-6789', NOW());

    -- READ: Get all farmers
    SELECT * FROM farmer;

    -- READ: Get a farmer by ID
    SELECT * FROM farmer WHERE id = 3;

    -- UPDATE: Update farmer's phone_no and synced_at by ID
    UPDATE farmer
    SET phone_no = '+63-998-765-4321',
        synced_at = NOW()
    WHERE id = 3;

    -- DELETE: Delete a farmer by ID
    DELETE FROM farmer WHERE id = 3;
  `,
  manange_field_records: `
    -- CREATE: Insert a new field record with explicit id
    INSERT INTO fields (id, farmer_id, barangay_id, mfid, synced_at)
    VALUES (3, 1, 1, 'MF-0003', NOW());

    -- READ: Get all fields
    SELECT * FROM fields;

    -- READ: Get a field by ID
    SELECT * FROM fields WHERE id = 3;

    -- READ: Get all fields for a specific farmer
    SELECT * FROM fields WHERE farmer_id = 1;

    -- UPDATE: Update field's barangay_id and mfid by ID
    UPDATE fields
    SET barangay_id = 2,
        mfid = 'MF-0004',
        synced_at = NOW()
    WHERE id = 3;

    -- DELETE: Delete a field by ID
    DELETE FROM fields WHERE id = 3;
  `,
  count_of_submitted_forms: `
    SELECT
    (SELECT COUNT(*) FROM field_planning) AS field_planning_count,
    (SELECT COUNT(*) FROM crop_establishments) AS crop_establishment_count,
    (SELECT COUNT(*) FROM fertilization_records) AS fertilization_record_count,
    (SELECT COUNT(*) FROM fertilizer_applications) AS fertilizer_application_count,
    (SELECT COUNT(*) FROM crop_cuts) AS crop_cut_count,
    (SELECT COUNT(*) FROM monitoring_visits) AS monitoring_visit_count,
    (SELECT COUNT(*) FROM harvest_records) AS harvest_record_count,
    (SELECT COUNT(*) FROM damage_assessments) AS damage_assessment_count;
  `,
  rate_of_data_collection: `
    -- daily
    SELECT
      DATE(collected_at) AS submission_date,
      COUNT(*) AS submissions_count
    FROM field_activities
    GROUP BY DATE(collected_at)
    ORDER BY submission_date;

    -- weekly
    SELECT
      DATE(collected_at) AS submission_date,
      COUNT(*) AS submissions_count
    FROM field_activities
    GROUP BY DATE(collected_at)
    ORDER BY submission_date;

    -- monthly
    SELECT
      DATE_TRUNC('month', collected_at)::date AS month_start,
      COUNT(*) AS submissions_count
    FROM field_activities
    GROUP BY month_start
    ORDER BY month_start;
  `,
  view_overall_yield: `
    SELECT
      SUM(hr.bags_harvested * hr.avg_bag_weight_kg) AS total_harvest_weight_kg,
      SUM(hr.harvested_area_ha) AS total_harvest_area_ha,
      CASE
        WHEN SUM(hr.harvested_area_ha) > 0 THEN
          ROUND(SUM(hr.bags_harvested * hr.avg_bag_weight_kg) / SUM(hr.harvested_area_ha), 2)
        ELSE
          NULL
      END AS overall_yield_kg_per_ha
    FROM harvest_records hr
    WHERE hr.bags_harvested IS NOT NULL
      AND hr.avg_bag_weight_kg IS NOT NULL
      AND hr.harvested_area_ha IS NOT NULL;
  `,
  view_yield_by_season: `
    SELECT
      s.season_type || ' ' || s.year AS season_name,
      s.semester,
      s.year,
      COUNT(DISTINCT fs.field_id) AS total_fields,
      SUM(hr.bags_harvested * hr.avg_bag_weight_kg) AS total_harvest_weight_kg,
      SUM(hr.harvested_area_ha) AS total_harvest_area_ha,
      CASE
        WHEN SUM(hr.harvested_area_ha) > 0 THEN
          ROUND(SUM(hr.bags_harvested * hr.avg_bag_weight_kg) / SUM(hr.harvested_area_ha), 2)
        ELSE
          NULL
      END AS yield_kg_per_ha
    FROM field_seasons fs
    JOIN seasons s ON s.id = fs.season_id
    JOIN fields f ON f.id = fs.field_id
    JOIN field_activities fa ON fa.field_id = f.id
    JOIN harvest_records hr ON hr.field_activity_id = fa.id
    WHERE hr.harvest_date IS NOT NULL
    GROUP BY s.season_type, s.semester, s.year
    ORDER BY s.year, s.season_type;
  `,
  view_yield_by_location: `
	  -- by province
		SELECT
		  pr.name AS province,
		  SUM(fs.predicted_yield) AS total_predicted_yield
		FROM field_seasons fs
		JOIN fields f ON fs.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		JOIN municities mu ON ba.municity_id = mu.id
		JOIN provinces pr ON mu.province_id = pr.id
		GROUP BY pr.name
		ORDER BY pr.name;

		-- by municipality
		SELECT
		  pr.name AS province,
		  mu.name AS municipality,
		  SUM(fs.predicted_yield) AS total_predicted_yield
		FROM field_seasons fs
		JOIN fields f ON fs.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		JOIN municities mu ON ba.municity_id = mu.id
		JOIN provinces pr ON mu.province_id = pr.id
		GROUP BY pr.name, mu.name
		ORDER BY pr.name, mu.name;

		-- by barangay
		SELECT
		  pr.name AS province,
		  mu.name AS municipality,
		  ba.name AS barangay,
		  SUM(fs.predicted_yield) AS total_predicted_yield
		FROM field_seasons fs
		JOIN fields f ON fs.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		JOIN municities mu ON ba.municity_id = mu.id
		JOIN provinces pr ON mu.province_id = pr.id
		GROUP BY pr.name, mu.name, ba.name
		ORDER BY pr.name, mu.name, ba.name;
  `,
  view_overall_damage_assessment_by_season: `
	  SELECT
		  s.season_type || ' ' || s.year AS season_name,
		  COUNT(da.id) AS total_damage_reports,
		  SUM(da.affected_area_ha) AS total_affected_area_ha
		FROM
		  damage_assessments da
		JOIN field_activities fa ON da.field_activity_id = fa.id
		JOIN field_seasons fs ON fa.field_id = fs.field_id
		JOIN seasons s ON fs.season_id = s.id
		GROUP BY
		  s.season_type,
		  s.year
		ORDER BY
		  s.year,
		  s.season_type;
  `,
  view_overall_damage_assessment_by_location: `
	  -- by province
		SELECT
		  pr.name AS province,
		  COUNT(da.id) AS total_damage_reports,
		  SUM(da.affected_area_ha) AS total_affected_area_ha
		FROM damage_assessments da
		JOIN field_activities fa ON da.field_activity_id = fa.id
		JOIN fields f ON fa.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		JOIN municities mu ON ba.municity_id = mu.id
		JOIN provinces pr ON mu.province_id = pr.id
		GROUP BY pr.name
		ORDER BY pr.name;

		-- by municipality
		SELECT
		  mu.name AS municipality,
		  COUNT(da.id) AS total_damage_reports,
		  SUM(da.affected_area_ha) AS total_affected_area_ha
		FROM damage_assessments da
		JOIN field_activities fa ON da.field_activity_id = fa.id
		JOIN fields f ON fa.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		JOIN municities mu ON ba.municity_id = mu.id
		GROUP BY mu.name
		ORDER BY mu.name;

		-- by barangay
		SELECT
		  ba.name AS barangay,
		  COUNT(da.id) AS total_damage_reports,
		  SUM(da.affected_area_ha) AS total_affected_area_ha
		FROM damage_assessments da
		JOIN field_activities fa ON da.field_activity_id = fa.id
		JOIN fields f ON fa.field_id = f.id
		JOIN barangays ba ON f.barangay_id = ba.id
		GROUP BY ba.name
		ORDER BY ba.name;
  `,
  view_damage_by_cause: `
	  SELECT
		  da.cause,
		  COUNT(da.id) AS total_reports,
		  SUM(da.affected_area_ha) AS total_affected_area_ha
		FROM
		  damage_assessments da
		GROUP BY
		  da.cause
		ORDER BY
		  total_reports DESC;
  `,
  view_fertilizer_application_frequency: `
	  SELECT
		  AVG(applications_per_ha) AS avg_fertilizer_applications_per_hectare
		FROM (
		  SELECT
		    fr.id AS fertilization_record_id,
		    fp.total_field_area_ha,
		    COUNT(fa.id)::DECIMAL / NULLIF(fp.total_field_area_ha, 0) AS applications_per_ha
		  FROM fertilization_records fr
		  JOIN fertilizer_applications fa ON fa.fertilization_record_id = fr.id
		  JOIN field_activities field_act ON field_act.id = fr.field_activity_id
		  JOIN field_planning fp ON fp.field_activity_id = field_act.id
		  GROUP BY fr.id, fp.total_field_area_ha
			) subquery;
  `,
  view_commonly_used_fertilizer_types_and_brands: `
	  SELECT
		  fertilizer_type,
		  brand_name,
		  COUNT(*) AS usage_count
		FROM fertilizer_applications
		GROUP BY
		  fertilizer_type,
		  brand_name
		ORDER BY
		  usage_count DESC
		LIMIT 10;
  `,
  view_avg_nutrient_inputs: `
	  SELECT
		  AVG(total_nitrogen_per_ha) AS avg_nitrogen_kg_per_ha,
		  AVG(total_phosphorus_per_ha) AS avg_phosphorus_kg_per_ha,
		  AVG(total_potassium_per_ha) AS avg_potassium_kg_per_ha
		FROM (
		  SELECT
		    fr.id AS fertilization_record_id,
		    fp.total_field_area_ha,
		    SUM(fa.nitrogen_content * fa.amount) / NULLIF(fp.total_field_area_ha, 0) AS total_nitrogen_per_ha,
		    SUM(fa.phosphorus_content * fa.amount) / NULLIF(fp.total_field_area_ha, 0) AS total_phosphorus_per_ha,
		    SUM(fa.potassium_content * fa.amount) / NULLIF(fp.total_field_area_ha, 0) AS total_potassium_per_ha
		  FROM fertilization_records fr
		  JOIN fertilizer_applications fa ON fa.fertilization_record_id = fr.id
		  JOIN field_activities factivity ON factivity.id = fr.field_activity_id
		  JOIN field_planning fp ON fp.field_activity_id = factivity.id
		  GROUP BY fr.id, fp.total_field_area_ha
		) subquery;
  `,
  view_most_practiced_crop_establishments: `
	  SELECT
		  ce.actual_crop_establishment_method,
		  COUNT(*) AS method_count
		FROM crop_establishments ce
		GROUP BY ce.actual_crop_establishment_method
		ORDER BY method_count DESC;
  `,
  view_common_plant_spacing_practices: `
	  SELECT
		  ce.avg_plant_distance_between,
		  ce.avg_plant_distance_within,
		  COUNT(*) AS frequency
		FROM crop_establishments ce
		GROUP BY ce.avg_plant_distance_between, ce.avg_plant_distance_within
		ORDER BY frequency DESC;
  `,
  view_most_planted_rice_varieties: `
	  SELECT
		  ce.rice_variety,
		  COUNT(*) AS frequency
		FROM crop_establishments ce
		WHERE ce.rice_variety IS NOT NULL AND ce.rice_variety <> ''
		GROUP BY ce.rice_variety
		ORDER BY frequency DESC;
  `,
  view_total_number_of_registered_farmers: `
	  SELECT COUNT(*) AS total_registered_farmers
		FROM farmer;
  `,
  view_farmer_distribution_by_location: `
    SELECT
      pr.name AS province,
      mu.name AS municipality,
      ba.name AS barangay,
      COUNT(DISTINCT f.farmer_id) AS total_farmers
    FROM fields f
    JOIN barangays ba ON f.barangay_id = ba.id
    JOIN municities mu ON ba.municity_id = mu.id
    JOIN provinces pr ON mu.province_id = pr.id
    GROUP BY pr.name, mu.name, ba.name
    ORDER BY pr.name, mu.name, ba.name;
  `,
  view_farmer_demographics_by_age_group_and_gender: `
    SELECT
      CASE
        WHEN EXTRACT(YEAR FROM AGE(f.birthdate)) < 20 THEN 'Under 20'
        WHEN EXTRACT(YEAR FROM AGE(f.birthdate)) BETWEEN 20 AND 29 THEN '20-29'
        WHEN EXTRACT(YEAR FROM AGE(f.birthdate)) BETWEEN 30 AND 39 THEN '30-39'
        WHEN EXTRACT(YEAR FROM AGE(f.birthdate)) BETWEEN 40 AND 49 THEN '40-49'
        WHEN EXTRACT(YEAR FROM AGE(f.birthdate)) BETWEEN 50 AND 59 THEN '50-59'
        ELSE '60 and above'
      END AS age_group,
      f.gender,
      COUNT(*) AS count
    FROM farmer f
    GROUP BY age_group, f.gender
    ORDER BY age_group, f.gender;
  `,
  view_total_land_area_under_rice_cultivation: `
   SELECT
      CASE
        WHEN field_count = 0 THEN 'No Fields'
        WHEN field_count = 1 THEN '1 Field'
        WHEN field_count BETWEEN 2 AND 3 THEN '2-3 Fields'
        ELSE '4 or More Fields'
      END AS field_group,
      COUNT(*) AS count
    FROM (
      SELECT
        f.id AS farmer_id,
        COUNT(fi.id) AS field_count
      FROM farmer f
      LEFT JOIN fields fi ON f.id = fi.farmer_id
      GROUP BY f.id
    ) AS subquery
    GROUP BY field_group
    ORDER BY field_group;
  `,
  compare_overall_damage_assessment: `
    SELECT
      p.name AS province,
      m.name AS municipality,
      b.name AS barangay,
      AVG(
        CASE LOWER(da.severity)
          WHEN 'low' THEN 1
          WHEN 'medium' THEN 2
          WHEN 'high' THEN 3
          ELSE NULL
        END
      ) AS avg_severity_score,
      COUNT(da.id) AS assessment_count
    FROM damage_assessments da
    JOIN field_activities fa ON da.field_activity_id = fa.id
    JOIN fields f ON fa.field_id = f.id
    JOIN barangays b ON f.barangay_id = b.id
    JOIN municities m ON b.municity_id = m.id
    JOIN provinces p ON m.province_id = p.id
    GROUP BY p.name, m.name, b.name
    ORDER BY p.name, m.name, b.name;
  `,
  compare_damage_assessments_by_season: `
    SELECT
      s.season_type,
      AVG(
        CASE LOWER(da.severity)
          WHEN 'low' THEN 1
          WHEN 'medium' THEN 2
          WHEN 'high' THEN 3
          ELSE NULL
        END
      ) AS avg_severity_score,
      COUNT(da.id) AS assessment_count
    FROM damage_assessments da
    JOIN field_activities fa ON da.field_activity_id = fa.id
    JOIN field_seasons fs ON fa.field_id = fs.field_id
    JOIN seasons s ON fs.season_id = s.id
    GROUP BY s.season_type
    ORDER BY s.season_type;
  `,

  compare_damage_assessment_by_cause: `
    SELECT cause, COUNT(*) AS count
    FROM damage_assessments
    GROUP BY cause
    ORDER BY count DESC;
  `,

  compare_yield_performance_by_season: `
    SELECT
      s.season_type AS season,
      AVG(cc.avg_crop_cut_yield) AS avg_yield
    FROM crop_cuts cc
    JOIN field_activities fa ON cc.field_activity_id = fa.id
    JOIN field_seasons fs ON fa.field_id = fs.field_id
    JOIN seasons s ON fs.season_id = s.id
    GROUP BY s.season_type
    ORDER BY s.season_type;
  `,

  compare_yield_performance_by_variety: `
    SELECT
      ce.rice_variety,
      AVG(cc.avg_crop_cut_yield) AS avg_yield
    FROM crop_establishments ce
    JOIN field_activities fa ON ce.field_activity_id = fa.id
    JOIN crop_cuts cc ON fa.id = cc.field_activity_id
    GROUP BY ce.rice_variety
    ORDER BY avg_yield DESC;
  `,

  compare_field_counts_by_location: `
    SELECT
      p.name AS province,
      m.name AS municipality,
      b.name AS barangay,
      COUNT(f.id) AS field_count
    FROM fields f
    JOIN barangays b ON f.barangay_id = b.id
    JOIN municities m ON b.municity_id = m.id
    JOIN provinces p ON m.province_id = p.id
    GROUP BY p.name, m.name, b.name
    ORDER BY field_count DESC;
  `,

  compare_yield_by_crop_establishment_method: `
    SELECT
      ce.actual_crop_establishment_method AS method,
      AVG(cc.avg_crop_cut_yield) AS avg_yield
    FROM crop_establishments ce
    JOIN field_activities fa ON ce.field_activity_id = fa.id
    JOIN crop_cuts cc ON fa.id = cc.field_activity_id
    GROUP BY ce.actual_crop_establishment_method
    ORDER BY avg_yield DESC;
  `,

  manage_user_account: `
    -- Create
    INSERT INTO users (id, fname, lname, date_created)
    VALUES
      (5, 'Luis', 'Martinez', NOW() - INTERVAL '6 days'),
      (6, 'Ella', 'Reyes', NOW() - INTERVAL '5 days');

    -- Assign Luis as a data_collector
    INSERT INTO data_collector (id, user_id, qr_token)
    VALUES (3, 5, 'QC-GH7I8J9');

    -- Assign Ella as a data_analyst
    INSERT INTO data_analyst (id, user_id, username, password_hash)
    VALUES (3, 6, 'ereyes', 'pbkdf2_sha256$260000$...');

    -- View
    SELECT
      u.id AS user_id,
      u.fname,
      u.lname,
      u.date_created,
      dc.qr_token,
      da.username
    FROM users u
    LEFT JOIN data_collector dc ON u.id = dc.user_id
    LEFT JOIN data_analyst da ON u.id = da.user_id
    ORDER BY u.id;

    -- Update
    UPDATE users
    SET fname = 'Luisito', lname = 'Martinez Jr.'
    WHERE id = 5;

    UPDATE data_collector
    SET qr_token = 'QC-NEW12345'
    WHERE user_id = 5;

    -- Delete
    DELETE FROM users
    WHERE id = 5;
  `,
};
