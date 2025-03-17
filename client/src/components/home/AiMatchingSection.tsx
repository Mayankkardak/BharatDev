import { useI18n } from "@/hooks/use-i18n";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import { Check } from "lucide-react";

const AiMatchingSection = () => {
  const { t } = useI18n();
  const { user } = useAuth();

  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-lg shadow-xl overflow-hidden h-[400px] bg-gradient-to-br from-blue-600/40 to-indigo-800/40 relative">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#ai-grad)" />
                <circle cx="200" cy="300" r="50" fill="rgba(255,255,255,0.1)" />
                <circle cx="600" cy="200" r="70" fill="rgba(255,255,255,0.05)" />
                <circle cx="400" cy="400" r="100" fill="rgba(255,255,255,0.05)" />
                <path d="M400,100 Q550,25 650,200 T750,300 T400,500 T50,300 T300,150 T400,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              </svg>

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white text-lg font-semibold">Resume Analysis</div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-sm text-blue-100">Skills Match</div>
                      <div className="text-white font-bold">92%</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-sm text-blue-100">Experience</div>
                      <div className="text-white font-bold">3.5 Yrs</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-sm text-blue-100">Job Matches</div>
                      <div className="text-white font-bold">24</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-sm text-blue-100">Recommendations</div>
                      <div className="text-white font-bold">15</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              {t("home.ai.title")}
              <span className="block mt-2 text-blue-100 text-2xl">{t("home.ai.title")}</span>
            </h2>
            
            <p className="text-blue-50 text-lg">
              {t("home.ai.subtitle")}
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("home.ai.feature1.title")}</h3>
                  <p className="text-blue-100">{t("home.ai.feature1.description")}</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("home.ai.feature2.title")}</h3>
                  <p className="text-blue-100">{t("home.ai.feature2.description")}</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("home.ai.feature3.title")}</h3>
                  <p className="text-blue-100">{t("home.ai.feature3.description")}</p>
                </div>
              </li>
            </ul>
            
            {user ? (
              <Link href="/profile">
                <Button className="inline-block bg-white text-accent-500 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition mt-4">
                  {t("home.ai.button")}
                </Button>
              </Link>
            ) : (
              <Link href="/auth">
                <Button className="inline-block bg-white text-accent-500 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition mt-4">
                  {t("home.ai.button")}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMatchingSection;
