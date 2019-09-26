import { Photon } from "@generated/photon";
const photon = new Photon();

async function main() {
  const user = await photon.users.create({
    data: {
      email: "user@example",
      name: "User",
      password: "$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu", // "graphql"
      posts: {
        create: [
          {
            title: "My First Post",
            content: "I am quite happy about it!",
            published: true
          },
          {
            title: "Meaning of life..",
            content: ".......",
            published: false
          }
        ]
      }
    }
  });

  console.log({ user });
}

main().finally(async () => {
  await photon.disconnect();
});
