-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;
