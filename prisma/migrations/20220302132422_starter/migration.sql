-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Present" BOOLEAN NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "teamId" TEXT,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Debate" (
    "id" TEXT NOT NULL,
    "Carried" BOOLEAN NOT NULL,
    "teamId" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "Debate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DebateScore" (
    "id" TEXT NOT NULL,
    "Score" INTEGER NOT NULL,
    "debateId" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "DebateScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeQuestion" (
    "id" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "Correct" TEXT NOT NULL,
    "A1" TEXT NOT NULL,
    "A2" TEXT NOT NULL,
    "A3" TEXT NOT NULL,
    "A4" TEXT NOT NULL,

    CONSTRAINT "ChallengeQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeScore" (
    "id" TEXT NOT NULL,
    "Response" JSONB,
    "Score" DOUBLE PRECISION NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "ChallengeScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WritingScore" (
    "id" TEXT NOT NULL,
    "Score" DOUBLE PRECISION NOT NULL,
    "Feedback" TEXT NOT NULL,
    "FileURL" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "WritingScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BowlScore" (
    "id" TEXT NOT NULL,
    "Score" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "BowlScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_id_key" ON "Team"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_id_key" ON "Participant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_Email_key" ON "Participant"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Debate_id_key" ON "Debate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DebateScore_id_key" ON "DebateScore"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeQuestion_id_key" ON "ChallengeQuestion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeScore_id_key" ON "ChallengeScore"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WritingScore_id_key" ON "WritingScore"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BowlScore_id_key" ON "BowlScore"("id");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debate" ADD CONSTRAINT "Debate_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debate" ADD CONSTRAINT "Debate_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebateScore" ADD CONSTRAINT "DebateScore_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebateScore" ADD CONSTRAINT "DebateScore_debateId_fkey" FOREIGN KEY ("debateId") REFERENCES "Debate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeScore" ADD CONSTRAINT "ChallengeScore_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WritingScore" ADD CONSTRAINT "WritingScore_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BowlScore" ADD CONSTRAINT "BowlScore_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
