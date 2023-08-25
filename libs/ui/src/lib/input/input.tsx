import React from 'react';

/* eslint-disable-next-line */
export interface InputProps {
	containerClasses?: string;
	inputClasses?: string;
	type: string;
	inputMode: "numeric" | "email" | "search" | "text" | "tel" | "url" | "none" | "decimal";
	label: string;
	labelClasses?: string;
	errorMessage: string;
	placeholder: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			containerClasses, inputClasses, type, inputMode, label, labelClasses, errorMessage, placeholder,
			...rest
		},
		ref,
	) => {		
		const parentClass = `${errorMessage ? 'border-red-dark focus:ring-red-dark text-red-dark placeholder-red-dark' : 'border-grey-light focus:ring-brand'} ${inputClasses}`;
		const labelClass = `${errorMessage ? 'text-red-dark' : 'text-grey-textDark dark:text-white'} ${labelClasses}`;

		if (inputMode === 'numeric' && type !== 'number') {
			type = 'number';
		} else if (inputMode === 'email' && type !== 'email') {
			type = 'email';
		}		

		return(
			<section className={`relative ${containerClasses}`}>
				<label className={`text-14 leading-[32px] font-semibold ${labelClass}`}>
					{ label }
				</label>
				<article className='relative'>
					<input 
						{ ...rest }
						ref={ref}
						type={type}
						inputMode={inputMode}
						placeholder={placeholder}
						className={`h-[48px] border border-grey-stroke focus:ring-1 focus:shadow-sm outline-none w-full block transition-all duration-0.6 ease-smooth rounded-4 px-12 text-16 ${parentClass}`} 
					/>	
				</article>
				{
					errorMessage && errorMessage !== '' &&
						<p className='text-14 text-red-dark mt-4'>
							{ errorMessage }
						</p>
				}
			</section>
		)
	}
);

export default Input;