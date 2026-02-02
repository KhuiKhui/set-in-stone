-- CreateTable
CREATE TABLE "MoodTable" (
    "id" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MoodTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MoodTable" ADD CONSTRAINT "MoodTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
