CMS.registerEventListener({
  name: "preSave",
  handler: ({ entry }) => {
    if (typeof uuid?.v4 !== "function") {
      throw "Status Artis: uuid library not found";
    }
    if (!!entry.get("data").get("translationKey")) {
      return;
    }
    // debugger;
    const newUuid = uuid.v4();
    // console.log("Status Artis: assigning new uuid: ", newUuid);
    return entry.get("data").set("translationKey", newUuid);
  },
});
