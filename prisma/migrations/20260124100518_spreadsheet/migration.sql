-- CreateTable
CREATE TABLE "Spreadsheet" (
    "id" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Spreadsheet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spreadsheet" ADD CONSTRAINT "Spreadsheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
