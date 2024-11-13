const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties

async function fetchProperties() {
  try {
    //Handle the case where the domain is not avaliable yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fets singl property

async function fetchProperty(id) {
  try {
    //Handle the case where the domain is not avaliable yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
