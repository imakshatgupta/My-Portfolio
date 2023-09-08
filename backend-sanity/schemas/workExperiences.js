export default {
    name:'workExperiences',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'title',
               title:'Title',
               type:'string'
            },
            {
                name:'company_name',
                title:'CompanyName',
                type:'string'
            },
            {
                name:'icon',
                title:'Icon',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
            {
                name: 'dateRange',
                title: 'Date Range',
                type: 'object',
                fields: [
                  {
                    name: 'startDate',
                    title: 'Start Date',
                    type: 'date',
                  },
                  {
                    name: 'endDate',
                    title: 'End Date',
                    type: 'date',
                  },
                ],
                preview: {
                  select: {
                    startDate: 'dateRange.startDate',
                    endDate: 'dateRange.endDate',
                  },
                  prepare(selection) {
                    const { startDate, endDate } = selection;
                    const startMonth = startDate ? startDate.substring(0, 7) : '';
                    const endMonth = endDate ? endDate.substring(0, 7) : '';
                    return {
                      title: `${startMonth} - ${endMonth}`,
                    };
                  },
                },
              },
            {
                name:'points',
                title:'Points',
                type:'array',
                of:[{
                    type:'string'
                }]
            },
    ]
}