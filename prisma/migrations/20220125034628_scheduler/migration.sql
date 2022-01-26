-- CreateTable
CREATE TABLE "Availability" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "monday" VARCHAR(200),
    "tuesday" VARCHAR(200),
    "wednesday" VARCHAR(200),
    "thursday" VARCHAR(200),
    "friday" VARCHAR(200),
    "saturday" VARCHAR(200),
    "sunday" VARCHAR(200),
    "timezone" VARCHAR(200) NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "friend_name" VARCHAR(200) NOT NULL,
    "availability_id" TEXT NOT NULL,
    "activity" VARCHAR(200) NOT NULL,
    "day" VARCHAR(200) NOT NULL,
    "time" VARCHAR(200) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Availability_username_key" ON "Availability"("username");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_availability_id_fkey" FOREIGN KEY ("availability_id") REFERENCES "Availability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
