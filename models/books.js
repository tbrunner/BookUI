var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  BookName: String,
  BookNumber: Number,
  MidStartPage: Number,
  EndStartPage: Number,
  StretchWords: [String],
  Sightwords: [String],
  HasIllustrator: Boolean,
  LessonNumber: Number,
  HasCountryOfOrigin: Boolean,
  AuthorLoc:{X: Number, Y: Number},
  IllustratorLoc:{X: Number, Y: Number},
  TitleLoc:{X: Number, Y: Number},
  Pages: [mongoose.Schema.Types.Mixed],
  GlossaryWord: [mongoose.Schema.Types.Mixed],
  IsReadable: Boolean,
});


mongoose.model('Book', BookSchema);

<!--Page: {PageNumber: Number, PageNumberColor:{R: Number, G: Number, B: Number, A: Number}, TextBoxes: [TextBox: {BoxNumber: Number, Location: {X: Number, Y: Number},Width: Number, FontSize: Number, FontFamily: Number, FixedLineSpace: Number, TextColor: {R: Number, G: Number, B: Number, A: Number}, HighlightColor: {R: Number, G: Number, B: Number, A: Number}, Lines: [Line:{LineNumber: Number, Text: String}]], PageInstruction: {Target: String, WordPart: String, Distractors: [Distractor: String]} -->