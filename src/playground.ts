import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: "test@gmail.com",
        firstName: "pedro",
        lastName: "silva"
    }
});

console.log("done")