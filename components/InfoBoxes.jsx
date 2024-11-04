import Infobox from "./Infobox";

const InfoBoxes = () => {
  return (
    // <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Infobox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              backgroundColor: "bg-black",
              link: "/properties",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </Infobox>

          <Infobox
            heading=" Add Property"
            backgroundColor="bg-blue-500"
            buttonInfo={{
              text: "Add Property",
              backgroundColor: "bg-black",
              link: "/properties/add",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </Infobox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
