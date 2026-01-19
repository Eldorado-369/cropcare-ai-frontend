import { useState } from 'react';
import { Camera, MessageCircle, Upload, Leaf, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      appTitle: 'CropCare AI',
      appSub: 'AI-Powered Crop Disease Detection',
      uploadTitle: 'Upload Crop Image for Analysis',
      uploadPrompt: 'Click to upload',
      uploadDesc: ' or drag and drop',
      uploadFormats: 'PNG, JPG or JPEG (MAX. 5MB)',
      analyzeButton: 'Analyze Crop Disease',
      analyzing: 'Analyzing with AI...',
      cropType: 'Crop Type: ',
      confidence: 'Confidence',
      severity: 'Severity: ',
      symptomsTitle: '🔍 Symptoms Observed:',
      treatmentTitle: '💊 Treatment Recommendations:',
      preventionTitle: '🛡️ Prevention Tips:',
      analyzeAnother: 'Analyze Another Image',
      instantDetection: 'Instant Detection',
      instantDesc: 'Upload a photo and get instant AI-powered disease detection',
      expertAdvice: 'Expert Advice',
      expertDesc: 'Receive treatment recommendations from agricultural AI',
      available: '24/7 Available',
      availableDesc: 'Access crop disease detection anytime, anywhere',
      errorSize: 'File size must be less than 5MB',
      errorType: 'Please upload an image file',
      errorAnalyze: 'Failed to analyze image. Make sure the backend server is running on http://localhost:8000',
      healthy:'Healthy Plant',
    },
    hi: {
      appTitle: 'CropCare AI',
      appSub: 'एआई-संचालित फसल रोग पहचान',
      uploadTitle: 'विश्लेषण के लिए फसल छवि अपलोड करें',
      uploadPrompt: 'अपलोड करने के लिए क्लिक करें',
      uploadDesc: ' या फ़ाइल खींचकर छोड़ें',
      uploadFormats: 'PNG, JPG या JPEG (अधिकतम 5MB)',
      analyzeButton: 'फसल रोग का विश्लेषण करें',
      analyzing: 'एआई के साथ विश्लेषण कर रहा है...',
      cropType: 'फसल प्रकार: ',
      confidence: 'विश्वास',
      severity: 'गंभीरता: ',
      symptomsTitle: '🔍 देखे गए लक्षण:',
      treatmentTitle: '💊 उपचार अनुशंसाएँ:',
      preventionTitle: '🛡️ रोकथाम सुझाव:',
      analyzeAnother: 'एक और छवि का विश्लेषण करें',
      instantDetection: 'तत्काल पहचान',
      instantDesc: 'एक फोटो अपलोड करें और तत्काल एआई-संचालित रोग पहचान प्राप्त करें',
      expertAdvice: 'विशेषज्ञ सलाह',
      expertDesc: 'कृषि एआई से उपचार अनुशंसाएँ प्राप्त करें',
      available: '24/7 उपलब्ध',
      availableDesc: 'कभी भी, कहीं भी फसल रोग पहचान तक पहुँच',
      errorSize: 'फ़ाइल का आकार 5MB से कम होना चाहिए',
      errorType: 'कृपया एक छवि फ़ाइल अपलोड करें',
      errorAnalyze: 'छवि का विश्लेषण करने में विफल. सुनिश्चित करें कि बैकएंड सर्वर http://localhost:8000 पर चल रहा है',
      healthy: 'स्वस्थ पौधा',
    },
    ta: {
      appTitle: 'CropCare AI',
      appSub: 'AI ஆல் இயக்கப்படும் பயிர் நோய் கண்டறிதல்',
      uploadTitle: 'பயிர் படத்தை பகுப்பாய்வுக்கு பதிவேற்றவும்',
      uploadPrompt: 'பதிவேற்ற கிளிக் செய்யவும்',
      uploadDesc: ' அல்லது இழுத்து விடவும்',
      uploadFormats: 'PNG, JPG அல்லது JPEG (அதிகபட்சம் 5MB)',
      analyzeButton: 'பயிர் நோயை பகுப்பாய்வு செய்யவும்',
      analyzing: 'AI உடன் பகுப்பாய்வு செய்யப்படுகிறது...',
      cropType: 'பயிர் வகை: ',
      confidence: 'நம்பிக்கை',
      severity: 'தீவிரம்: ',
      symptomsTitle: '🔍 காணப்பட்ட அறிகுறிகள்:',
      treatmentTitle: '💊 சிகிச்சை பரிந்துரைகள்:',
      preventionTitle: '🛡️ தடுப்பு குறிப்புகள்:',
      analyzeAnother: 'மற்றொரு படத்தை பகுப்பாய்வு செய்யவும்',
      instantDetection: 'உடனடி கண்டறிதல்',
      instantDesc: 'புகைப்படத்தை பதிவேற்றி உடனடி AI நோய் கண்டறிதலைப் பெறுங்கள்',
      expertAdvice: 'நிபுணர் ஆலோசனை',
      expertDesc: 'விவசாய AI இலிருந்து சிகிச்சை பரிந்துரைகளைப் பெறுங்கள்',
      available: '24/7 கிடைக்கும்',
      availableDesc: 'எப்போது வேண்டுமானாலும் பயிர் நோய் கண்டறிதலை அணுகுங்கள்',
      errorSize: 'கோப்பு அளவு 5MB ஐ விட குறைவாக இருக்க வேண்டும்',
      errorType: 'தயவுசெய்து ஒரு படக் கோப்பை பதிவேற்றவும்',
      errorAnalyze: 'பட பகுப்பாய்வு தோல்வியடைந்தது. பின்னணி சர்வர் இயங்குகிறதா என சரிபார்க்கவும்',
      healthy: 'ஆரோக்கியமான தாவரம்',
    },
    te: {
      appTitle: 'CropCare AI',
      appSub: 'AI ఆధారిత పంట వ్యాధి గుర్తింపు',
      uploadTitle: 'విశ్లేషణ కోసం పంట చిత్రాన్ని అప్‌లోడ్ చేయండి',
      uploadPrompt: 'అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి',
      uploadDesc: ' లేదా లాగి వదలండి',
      uploadFormats: 'PNG, JPG లేదా JPEG (గరిష్టం 5MB)',
      analyzeButton: 'పంట వ్యాధిని విశ్లేషించండి',
      analyzing: 'AIతో విశ్లేషిస్తున్నది...',
      cropType: 'పంట రకం: ',
      confidence: 'విశ్వాసం',
      severity: 'తీవ్రత: ',
      symptomsTitle: '🔍 గమనించిన లక్షణాలు:',
      treatmentTitle: '💊 చికిత్స సిఫార్సులు:',
      preventionTitle: '🛡️ నివారణ చిట్కాలు:',
      analyzeAnother: 'మరొక చిత్రాన్ని విశ్లేషించండి',
      instantDetection: 'తక్షణ గుర్తింపు',
      instantDesc: 'ఫోటో అప్‌లోడ్ చేసి తక్షణ AI ఆధారిత వ్యాధి గుర్తింపు పొందండి',
      expertAdvice: 'నిపుణుల సలహా',
      expertDesc: 'వ్యవసాయ AI నుండి చికిత్స సిఫార్సులు పొందండి',
      available: '24/7 అందుబాటులో ఉంది',
      availableDesc: 'ఎప్పుడైనా పంట వ్యాధి గుర్తింపును యాక్సెస్ చేయండి',
      errorSize: 'ఫైల్ పరిమాణం 5MB కంటే తక్కువగా ఉండాలి',
      errorType: 'దయచేసి ఒక చిత్ర ఫైల్‌ను అప్‌లోడ్ చేయండి',
      errorAnalyze: 'చిత్ర విశ్లేషణ విఫలమైంది. బ్యాకెండ్ సర్వర్ నడుస్తున్నదని నిర్ధారించుకోండి',
      healthy: 'ఆరోగ్యకరమైన మొక్క',
    },
    kn: {
      appTitle: 'CropCare AI',
      appSub: 'AI-ಚಾಲಿತ ಬೆಳೆ ರೋಗ ಪತ್ತೆಹಚ್ಚುವಿಕೆ',
      uploadTitle: 'ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಬೆಳೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      uploadPrompt: 'ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
      uploadDesc: ' ಅಥವಾ ಫೈಲ್ ಅನ್ನು ಎಳೆದು ಇಲ್ಲಿ ಬಿಡಿ',
      uploadFormats: 'PNG, JPG ಅಥವಾ JPEG (ಗರಿಷ್ಠ 5MB)',
      analyzeButton: 'ಬೆಳೆ ರೋಗವನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
      analyzing: 'AI ಮೂಲಕ ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
      cropType: 'ಬೆಳೆಯ ವಿಧ: ',
      confidence: 'ವಿಶ್ವಾಸಾರ್ಹತೆ',
      severity: 'ತೀವ್ರತೆ: ',
      symptomsTitle: '🔍 ಕಂಡುಬಂದ ಲಕ್ಷಣಗಳು:',
      treatmentTitle: '💊 ಚಿಕಿತ್ಸಾ ಶಿಫಾರಸುಗಳು:',
      preventionTitle: '🛡️ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು:',
      analyzeAnother: 'ಮತ್ತೊಂದು ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
      instantDetection: 'ತಕ್ಷಣದ ಪತ್ತೆಹಚ್ಚುವಿಕೆ',
      instantDesc: 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ತಕ್ಷಣದ AI-ಚಾಲಿತ ರೋಗ ಪತ್ತೆಹಚ್ಚುವಿಕೆಯನ್ನು ಪಡೆಯಿರಿ',
      expertAdvice: 'ತಜ್ಞರ ಸಲಹೆ',
      expertDesc: 'ಕೃಷಿ AI ನಿಂದ ಚಿಕಿತ್ಸಾ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ',
      available: '24/7 ಲಭ್ಯವಿದೆ',
      availableDesc: 'ಯಾವುದೇ ಸಮಯದಲ್ಲಿ, ಎಲ್ಲಿಯಾದರೂ ಬೆಳೆ ರೋಗ ಪತ್ತೆಹಚ್ಚುವಿಕೆಯನ್ನು ಪ್ರವೇಶಿಸಿ',
      errorSize: 'ಫೈಲ್ ಗಾತ್ರವು 5MB ಗಿಂತ ಕಡಿಮೆ ಇರಬೇಕು',
      errorType: 'ದಯವಿಟ್ಟು ಚಿತ್ರದ ಫೈಲ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      errorAnalyze: 'ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ವಿಫಲವಾಗಿದೆ. ಬ್ಯಾಕೆಂಡ್ ಸರ್ವರ್ http://localhost:8000 ನಲ್ಲಿ ಚಾಲನೆಯಲ್ಲಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ',
      healthy:'ಆರೋಗ್ಯಕರ ಸಸ್ಯ',
    },
    ml: {
      appTitle: 'CropCare AI',
      appSub: 'AI അടിസ്ഥാനമാക്കിയുള്ള വിള രോഗനിർണ്ണയം',
      uploadTitle: 'വിശകലനത്തിനായി വിളയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
      uploadPrompt: 'അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക',
      uploadDesc: ' അല്ലെങ്കിൽ ഫയൽ ഇവിടെ ഡ്രാഗ് ചെയ്ത് ഇടുക',
      uploadFormats: 'PNG, JPG അല്ലെങ്കിൽ JPEG (പരമാവധി 5MB)',
      analyzeButton: 'വിള രോഗം വിശകലനം ചെയ്യുക',
      analyzing: 'AI ഉപയോഗിച്ച് വിശകലനം ചെയ്യുന്നു...',
      cropType: 'വിളയുടെ ഇനം: ',
      confidence: 'കൃത്യത',
      severity: 'തീവ്രത: ',
      symptomsTitle: '🔍 കണ്ടെത്തിയ ലക്ഷണങ്ങൾ:',
      treatmentTitle: '💊 ചികിത്സാ നിർദ്ദേശങ്ങൾ:',
      preventionTitle: '🛡️ പ്രതിരോധ മാർഗ്ഗങ്ങൾ:',
      analyzeAnother: 'മറ്റൊരു ചിത്രം വിശകലനം ചെയ്യുക',
      instantDetection: 'തൽക്ഷണ രോഗനിർണ്ണയം',
      instantDesc: 'ഒരു ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യൂ, തൽക്ഷണം AI അടിസ്ഥാനമാക്കിയുള്ള രോഗനിർണ്ണയം നേടൂ',
      expertAdvice: 'വിദഗ്ദ്ധ ഉപദേശം',
      expertDesc: 'അഗ്രികൾച്ചറൽ AI-ൽ നിന്ന് ചികിത്സാ നിർദ്ദേശങ്ങൾ സ്വീകരിക്കുക',
      available: '24/7 ലഭ്യമാണ്',
      availableDesc: 'എപ്പോൾ വേണമെങ്കിലും എവിടെ വെച്ചും വിള രോഗനിർണ്ണയം നടത്താം',
      errorSize: 'ഫയൽ സൈസ് 5MB-യിൽ കുറവായിരിക്കണം',
      errorType: 'ദയവായി ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
      errorAnalyze: 'ചിത്രം വിശകലനം ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. ബാക്കെൻഡ് സെർവർ http://localhost:8000-ൽ പ്രവർത്തിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക',
      healthy: 'ആരോഗ്യകരമായ വിള',
    },
    bn: {
      appTitle: 'CropCare AI',
      appSub: 'এআই-চালিত শস্য রোগ নির্ণয়',
      uploadTitle: 'বিশ্লেষণের জন্য শস্যের ছবি আপলোড করুন',
      uploadPrompt: 'আপলোড করতে ক্লিক করুন',
      uploadDesc: ' অথবা ফাইলটি টেনে এখানে আনুন',
      uploadFormats: 'PNG, JPG বা JPEG (সর্বোচ্চ ৫ মেগাবাইট)',
      analyzeButton: 'শস্যের রোগ বিশ্লেষণ করুন',
      analyzing: 'এআই-এর মাধ্যমে বিশ্লেষণ করা হচ্ছে...',
      cropType: 'শস্যের ধরণ: ',
      confidence: 'নির্ভুলতা',
      severity: 'তীব্রতা: ',
      symptomsTitle: '🔍 পরিলক্ষিত লক্ষণসমূহ:',
      treatmentTitle: '💊 প্রতিকারের পরামর্শ:',
      preventionTitle: '🛡️ প্রতিরোধমূলক ব্যবস্থা:',
      analyzeAnother: 'আরেকটি ছবি বিশ্লেষণ করুন',
      instantDetection: 'তাত্ক্ষণিক সনাক্তকরণ',
      instantDesc: 'একটি ছবি আপলোড করুন এবং তাত্ক্ষণিক এআই-চালিত রোগ নির্ণয় পান',
      expertAdvice: 'বিশেষজ্ঞের পরামর্শ',
      expertDesc: 'কৃষি এআই থেকে চিকিৎসার সুপারিশ গ্রহণ করুন',
      available: '২৪/৭ উপলব্ধ',
      availableDesc: 'যেকোনো সময়, যেকোনো জায়গা থেকে শস্যের রোগ নির্ণয় করুন',
      errorSize: 'ফাইলের আকার ৫ মেগাবাইটের কম হতে হবে',
      errorType: 'অনুগ্রহ করে একটি ছবি ফাইল আপলোড করুন',
      errorAnalyze: 'ছবিটি বিশ্লেষণ করতে ব্যর্থ হয়েছে। ব্যাকএন্ড সার্ভারটি http://localhost:8000 এ চলছে কিনা তা নিশ্চিত করুন',
      healthy: 'সুস্থ উদ্ভিদ',
    },
    mr: {
      appTitle: 'CropCare AI',
      appSub: 'AI-आधारित पीक रोग ओळख',
      uploadTitle: 'विश्लेषणासाठी पिकाचा फोटो अपलोड करा',
      uploadPrompt: 'अपलोड करण्यासाठी क्लिक करा',
      uploadDesc: ' किंवा फाईल ओढून येथे सोडा',
      uploadFormats: 'PNG, JPG किंवा JPEG (कमाल 5MB)',
      analyzeButton: 'पीक रोगाचे विश्लेषण करा',
      analyzing: 'AI द्वारे विश्लेषण होत आहे...',
      cropType: 'पिकाचा प्रकार: ',
      confidence: 'अचूकता',
      severity: 'तीव्रता: ',
      symptomsTitle: '🔍 आढळलेली लक्षणे:',
      treatmentTitle: '💊 उपचारांसाठी शिफारसी:',
      preventionTitle: '🛡️ प्रतिबंधात्मक उपाय:',
      analyzeAnother: 'दुसऱ्या फोटोचे विश्लेषण करा',
      instantDetection: 'झटपट ओळख',
      instantDesc: 'फोटो अपलोड करा आणि त्वरित AI-आधारित रोग निदान मिळवा',
      expertAdvice: 'तज्ज्ञ सल्ला',
      expertDesc: 'कृषी AI कडून उपचारांच्या शिफारसी मिळवा',
      available: '२४/७ उपलब्ध',
      availableDesc: 'कधीही, कोठेही पीक रोग निदानाची सुविधा मिळवा',
      errorSize: 'फाईलचा आकार 5MB पेक्षा कमी असावा',
      errorType: 'कृपया केवळ इमेज फाईल अपलोड करा',
      errorAnalyze: 'फोटोचे विश्लेषण करण्यात अयशस्वी. बॅकएंड सर्व्हर http://localhost:8000 वर सुरू असल्याची खात्री करा',
      healthy: 'तंदुरुस्त वनस्पती',
    },
    gu: {
      appTitle: 'CropCare AI',
      appSub: 'AI-સંચાલિત પાક રોગ ઓળખ',
      uploadTitle: 'વિશ્લેષણ માટે પાકની છબી અપલોડ કરો',
      uploadPrompt: 'અપલોડ કરવા માટે ક્લિક કરો',
      uploadDesc: ' અથવા ફાઇલ ખેંચીને અહીં લાવો',
      uploadFormats: 'PNG, JPG અથવા JPEG (મહત્તમ 5MB)',
      analyzeButton: 'પાક રોગનું વિશ્લેષણ કરો',
      analyzing: 'AI સાથે વિશ્લેષણ કરી રહ્યું છે...',
      cropType: 'પાકનો પ્રકાર: ',
      confidence: 'ચોકસાઈ',
      severity: 'તીવ્રતા: ',
      symptomsTitle: '🔍 જોવા મળેલા લક્ષણો:',
      treatmentTitle: '💊 સારવાર માટેની ભલામણો:',
      preventionTitle: '🛡️ નિવારક સૂચનો:',
      analyzeAnother: 'બીજી છબીનું વિશ્લેષણ કરો',
      instantDetection: 'તત્કાલ ઓળખ',
      instantDesc: 'ફોટો અપલોડ કરો અને ત્વરિત AI-સંચાલિત રોગ ઓળખ મેળવો',
      expertAdvice: 'નિષ્ણાત સલાહ',
      expertDesc: 'કૃષિ AI પાસેથી સારવારની ભલામણો મેળવો',
      available: '24/7 ઉપલબ્ધ',
      availableDesc: 'ગમે ત્યારે, ગમે ત્યાં પાક રોગ ઓળખની સુવિધા મેળવો',
      errorSize: 'ફાઇલનું કદ 5MB થી ઓછું હોવું જોઈએ',
      errorType: 'કૃપા કરીને ઇમેજ ફાઇલ અપલોડ કરો',
      errorAnalyze: 'છબીનું વિશ્લેષણ કરવામાં નિષ્ફળ. ખાતરી કરો કે બેકએન્ડ સર્વર http://localhost:8000 પર ચાલુ છે',
      healthy: 'સ્વસ્થ છોડ',
    },
    pa: {
      appTitle: 'CropCare AI',
      appSub: 'AI-ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਫਸਲ ਰੋਗ ਪਛਾਣ',
      uploadTitle: 'ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਫਸਲ ਦੀ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ',
      uploadPrompt: 'ਅਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ',
      uploadDesc: ' ਜਾਂ ਫਾਈਲ ਖਿੱਚ ਕੇ ਇੱਥੇ ਸੁੱਟੋ',
      uploadFormats: 'PNG, JPG ਜਾਂ JPEG (ਵੱਧ ਤੋਂ ਵੱਧ 5MB)',
      analyzeButton: 'ਫਸਲ ਦੇ ਰੋਗ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
      analyzing: 'AI ਨਾਲ ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...',
      cropType: 'ਫਸਲ ਦੀ ਕਿਸਮ: ',
      confidence: 'ਭਰੋਸੇਯੋਗਤਾ',
      severity: 'ਗੰਭੀਰਤਾ: ',
      symptomsTitle: '🔍 ਦੇਖੇ ਗਏ ਲੱਛਣ:',
      treatmentTitle: '💊 ਇਲਾਜ ਲਈ ਸਿਫ਼ਾਰਸ਼ਾਂ:',
      preventionTitle: '🛡️ ਬਚਾਅ ਦੇ ਸੁਝਾਅ:',
      analyzeAnother: 'ਇੱਕ ਹੋਰ ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
      instantDetection: 'ਤੁਰੰਤ ਪਛਾਣ',
      instantDesc: 'ਇੱਕ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ ਅਤੇ ਤੁਰੰਤ AI-ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਰੋਗ ਪਛਾਣ ਪ੍ਰਾਪਤ ਕਰੋ',
      expertAdvice: 'ਮਾਹਿਰਾਂ ਦੀ ਸਲਾਹ',
      expertDesc: 'ਖੇਤੀਬਾੜੀ AI ਤੋਂ ਇਲਾਜ ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ',
      available: '24/7 ਉਪਲਬਧ',
      availableDesc: 'ਕਿਸੇ ਵੀ ਸਮੇਂ, ਕਿਤੇ ਵੀ ਫਸਲ ਰੋਗ ਪਛਾਣ ਤੱਕ ਪਹੁੰਚ',
      errorSize: 'ਫਾਈਲ ਦਾ ਆਕਾਰ 5MB ਤੋਂ ਘੱਟ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ',
      errorType: 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਚਿੱਤਰ (image) ਫਾਈਲ ਅਪਲੋਡ ਕਰੋ',
      errorAnalyze: 'ਚਿੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਅਸਫਲ। ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਬੈਕਐਂਡ ਸਰਵਰ http://localhost:8000 ਤੇ ਚੱਲ ਰਿਹਾ ਹੈ',
      healthy: 'ਸਿਹਤਮੰਦ ਪੌਦਾ',
    },

  };

  const severityMap = {
    en: {mild: 'mild',moderate: 'moderate',severe: 'severe',},
    hi: { mild: 'हल्का',moderate: 'मध्यम',severe: 'गंभीर', },
    ta: { mild: 'லேசான', moderate: 'மிதமான', severe: 'கடுமையான' },
    te: { mild: 'లఘు', moderate: 'మధ్యస్థ', severe: 'తీవ్రమైన' },
    kn: { mild: 'ಸೌಮ್ಯ', moderate: 'ಮಧ್ಯಮ', severe: 'ತೀವ್ರ' },
    ml: { mild: 'ലഘുവായ', moderate: 'മിതമായ', severe: 'കഠിനമായ' },
    bn: { mild: 'সামান্য', moderate: 'মাঝারি', severe: 'তীব্র' },
    mr: { mild: 'सौम्य', moderate: 'मध्यम', severe: 'तीव्र' },
    gu: { mild: 'હળવું', moderate: 'મધ્યમ', severe: 'ગંભીર' },
    pa: { mild: 'ਹਲਕਾ', moderate: 'ਮੱਧਮ', severe: 'ਗੰਭੀਰ' }
  };

  const t = (key) => translations[language][key] || key;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert(t('errorSize'));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert(t('errorType'));
        return;
      }

      setSelectedImage(file);
      setResult(null);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('language', language);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error:', err);
      setError(t('errorAnalyze'));
    } finally {
      setLoading(false);
    }
  };



  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'mild': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'moderate': return 'text-orange-700 bg-orange-50 border-orange-200';
      case 'severe': return 'text-red-700 bg-red-50 border-red-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('appTitle')}</h1>
                <p className="text-sm text-gray-600">{t('appSub')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Language / भाषा</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
                <option value="mr">मराठी</option>
                <option value="te">తెలుగు</option>
                <option value="ta">தமிழ்</option>
                <option value="gu">ગુજરાતી</option>
                <option value="kn">ಕನ್ನಡ</option>
                <option value="ml">മലയാളം</option>
                <option value="pa">ਪੰਜਾਬੀ</option>

              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <Camera className="w-6 h-6 text-green-600" />
            {t('uploadTitle')}
          </h2>

          {/* Upload Section */}
          <div className="mb-6">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors bg-gray-50 hover:bg-gray-100">
              {preview ? (
                <div className="relative w-full h-full">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-contain rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      resetAnalysis();
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">{t('uploadPrompt')}</span>{t('uploadDesc')}
                  </p>
                  <p className="text-xs text-gray-500">{t('uploadFormats')}</p>
                  
                </div>
                

              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Analyze Button */}
          {preview && !result && (
            <button
              onClick={analyzeImage}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t('analyzing')}
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5" />
                  {t('analyzeButton')}
                </>
              )}
            </button>
          )}

          {/* Results Section */}
          {result && (
            <div className="mt-6 space-y-4">
              {/* Disease Name & Confidence */}
              <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                      {result.disease_name?.toLowerCase().includes('healthy') || 
                      result.disease_name === t('healthy') || 
                      result.is_healthy ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                      )}
                      {result.disease_name}
                    </h3>
                    {/* upto here */}
                    <p className="text-sm text-gray-600">{t('cropType')}{result.crop_type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{result.confidence}%</div>
                    <p className="text-xs text-gray-500">{t('confidence')}</p>
                  </div>
                </div>
                
                {result.severity && result.severity !== 'N/A' && (
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(result.severity)}`}>
                    {t('severity')}{severityMap[language][result.severity?.toLowerCase()] || result.severity}
                  </div>
                )}
              </div>

              {/* Symptoms */}
              {result.symptoms && result.symptoms.length > 0 && (
                <div className="p-5 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">{t('symptomsTitle')}</h4>
                  <ul className="space-y-2">
                    {result.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatment */}
              {result.treatment && result.treatment.length > 0 && (
                <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">{t('treatmentTitle')}</h4>
                  <ol className="space-y-2">
                    {result.treatment.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-semibold text-green-600">{idx + 1}.</span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Prevention */}
              {result.prevention && result.prevention.length > 0 && (
                <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">{t('preventionTitle')}</h4>
                  <ul className="space-y-2">
                    {result.prevention.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Analyze Another Button */}
              <button
                onClick={resetAnalysis}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                {t('analyzeAnother')}
              </button>
            </div>
          )}
        </div>

        {/* Info Cards */}
        {!result && (
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Camera className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">{t('instantDetection')}</h3>
              <p className="text-sm text-gray-600">
                {t('instantDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <MessageCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">{t('expertAdvice')}</h3>
              <p className="text-sm text-gray-600">
                {t('expertDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Leaf className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">{t('available')}</h3>
              <p className="text-sm text-gray-600">
                {t('availableDesc')}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;