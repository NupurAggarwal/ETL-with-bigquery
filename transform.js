function transform(line) {
var values = line.split(',');
var custObj = new Object();
custObj.cdc_report_dt = values[0];
custObj.pos_spec_dt = values[1];
custObj.onset_dt = values[2];
custObj.current_status = values[3];
custObj.sex = values[4];
custObj.age_group = values[5];
custObj.hosp_yn = values[7];
custObj.icu_yn = values[8];
custObj.death_yn = values[9];
custObj.medcond_yn = values[10];
var outJson = JSON.stringify(custObj);
return outJson;
}