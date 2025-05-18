export interface Place {
    id: number;
    name: string;
    adress?: string;
    email?: string;
    phone?: string;
    website?: string;
    category: string;
    lat: number;
    lon: number;
}

const CATEGORY_TAGS: Record<string, string> = {
    veterinär: '["amenity"="veterinary"]',
    djurhem: '["amenity"="animal_shelter"]',
    hundrastgård: '["leisure"="dog_park"]',
    kafé: '["amenity"="cafe"]["pets"="yes"]',
    djurbutik: '["shop"="pet"]',
};

export async function fetchPlacesByCategory(
    category: string,
    searchLocation?: string,
    fallbackCoords?: { lat: number; lon: number }
): Promise<Place[]> {
    const tag = CATEGORY_TAGS[category.toLowerCase()];
    console.log("Tag:", tag);
    console.log("Search Location:", searchLocation);

    // Check if the category is valid
    if (!tag) return [];

    let lat: number, lon: number;

    // Use Nominatim to geocode the search location
    if (searchLocation) {
        const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                searchLocation
            )}&format=json&limit=1`
        );
        const geoData = await geoRes.json();
        if (!geoData.length) return [];

        lat = geoData[0].lat;
        lon = geoData[0].lon;
    } else if (fallbackCoords) {
        lat = fallbackCoords.lat;
        lon = fallbackCoords.lon;
    } else {
        return []; // No valid coordinates
    }

    const radius = 10000; // 10km radius

    // const query = `
    //   [out:json][timeout:25];
    //   (
    //     node${tag}(55.0,10.0,69.0,25.0);
    //     way${tag}(55.0,10.0,69.0,25.0);
    //     relation${tag}(55.0,10.0,69.0,25.0);
    //   );
    //   out center;
    // `;

    const overpassQuery = `
    [out:json];
    (
      node${tag}(around:${radius},${lat},${lon});
      way${tag}(around:${radius},${lat},${lon});
      relation${tag}(around:${radius},${lat},${lon});
    );
    out center;
  `;

    const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: overpassQuery,
    });

    const data = await response.json();

    const results: Place[] = data.elements
        .map((el: any) => ({
            id: el.id,
            name: el.tags?.name ?? "Okänd plats",
            adress: el.tags?.addr_full,
            email: el.tags?.email,
            phone: el.tags?.phone,
            website: el.tags?.website,
            lat: el.lat || el.center?.lat,
            lon: el.lon || el.center?.lon,
            category,
        }))
        .filter((p: Place) => p.lat && p.lon);

    return results;
}
