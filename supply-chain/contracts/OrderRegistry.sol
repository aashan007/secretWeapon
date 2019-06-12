pragma solidity >=0.4.22 <0.6.0;

contract OrderRegistry {
  struct Order {
    bytes32 supplier_name;
    bytes32 mfg_name;
    bytes32 dist_name;

    bytes32 supplier_report;
    bytes32 mfg_report;
    bytes32 dist_report;

    bytes32 supplier_quantity;
    bytes32 mfg_quantity;
    bytes32 dist_quantity;

    bytes32 supplier_value;
    bytes32 mfg_value;
    bytes32 dist_value;

    bytes32 supplier_date;
    bytes32 mfg_date;
    bytes32 dist_date;

    bytes32 thresh_temp;
    bytes32 product_name;
    bytes32 raw_material_name;

  }

  mapping(bytes32=>Order) registry;

  event OrderGenerated(bytes32 orderno);
  event MfgTrigger(bytes32 orderno);
  event SupplyTrigger(bytes32 orderno);
  event ReportSubmit(bytes32 orderno, uint category, bytes32 report);

  function createOrder(bytes32 orderno, bytes32 product, bytes32 temp, bytes32 value, bytes32 quantity, bytes32 delivery) public {
    registry[orderno].product_name = product;
    registry[orderno].thresh_temp = temp;
    registry[orderno].dist_value = value;
    registry[orderno].dist_quantity = quantity;
    registry[orderno].dist_date = delivery;
    emit OrderGenerated(orderno);
  }

  function setDistValues(bytes32 orderno, bytes32 name, bytes32 delivery, bytes32 value, bytes32 quantity) public  {
    registry[orderno].dist_name = name;
    registry[orderno].mfg_date = delivery;
    registry[orderno].mfg_value = value;
    registry[orderno].mfg_quantity = quantity;
    emit MfgTrigger(orderno);
  }

  function setMfgValues(bytes32 orderno, bytes32 name, bytes32 material, bytes32 delivery, bytes32 value, bytes32 quantity) public {
    registry[orderno].mfg_name = name;
    registry[orderno].supplier_date = delivery;
    registry[orderno].supplier_value = value;
    registry[orderno].supplier_quantity = quantity;
    registry[orderno].raw_material_name = material;
    emit SupplyTrigger(orderno);
  }

  function setReport(bytes32 orderno, uint category, bytes32 report) public {
    if(category == 1) {
      registry[orderno].dist_report = report;
    }
    if( category == 2 ) {
      registry[orderno].mfg_report = report;
    }
    if( category == 3 ) {
      registry[orderno].supplier_report = report;
    }
    emit ReportSubmit(orderno, category, report);
  }

  function getReport(bytes32 orderno, uint category) public view returns(bytes32) {
    if(category == 1) {
      return registry[orderno].dist_report;
    }
    if( category == 2 ) {
      return registry[orderno].mfg_report;
    }
    if( category == 3 ) {
      return registry[orderno].supplier_report;
    }
    return "undefined";
  }

  function fetchInitialDetails(bytes32 orderno) public view returns(bytes32, bytes32, bytes32, bytes32, bytes32) {
    return (registry[orderno].product_name,
            registry[orderno].thresh_temp,
            registry[orderno].dist_value,
            registry[orderno].dist_quantity,
            registry[orderno].dist_date);
  }

  function getDistValues(bytes32 orderno) public view returns(bytes32, bytes32, bytes32, bytes32) {
    return (registry[orderno].dist_name, registry[orderno].mfg_date,
            registry[orderno].mfg_value, registry[orderno].mfg_quantity);
  }

  function getMfgDetails(bytes32 orderno) public view returns(bytes32, bytes32, bytes32, bytes32, bytes32) {
    return (registry[orderno].mfg_name,
    registry[orderno].supplier_date,
    registry[orderno].supplier_value,
    registry[orderno].supplier_quantity,
    registry[orderno].raw_material_name);
  }

}
