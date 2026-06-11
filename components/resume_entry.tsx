interface ResumeEntryProps {
  date: string;
  company: string;
  role: string;
  responsibilities: string[];
}

export default function ResumeEntry({
  date,
  company,
  role,
  responsibilities,
}: ResumeEntryProps) {
  return (
    <li className="group relative mb-10 | md:mb-16">

      {/* Diamond */}
      <div className="absolute hidden left-0 top-2 h-2 w-2 -translate-x-1/2 rotate-45 bg-cyan-400 transition-all duration-300 
                      group-hover:-rotate-45 group-hover:bg-purple-500
                      | md:left-4 md:top-2 md:h-4 md:w-4 md:block"/>

      {/* Content */}
      <div className="ml-2 rounded-xl border bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 border-purple-500/50
                      group-hover:border-purple-500/50 group-hover:-translate-y-1
                      | md:ml-16 md:p-12 md:border-white">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs uppercase text-white">
          {date}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white | md:text-2xl">
          {company}
        </h3>

        <h4 className="mb-4 text-cyan-400">
          {role}
        </h4>

        <ul className="space-y-2 text-slate-300 text-xs list-disc font-light | md:text-lg">
          {responsibilities.map((item, index) => (
            <li key={index}>
                {item}
            </li>
          ))}
        </ul>
      </div>

    </li>
  );
}